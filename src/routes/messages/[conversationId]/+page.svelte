<script lang="ts">
	import {
		addNewMessage,
		getConversationById,
		getMessagesByConversationId,
		listenToMessagesByConversationId
	} from '$lib/services/messages';
	import { getUserProfileByUid } from '$lib/services/user/profile';
	import { userProfile$ } from '$lib/store/store';
	import type { Message, UserProfile } from '$lib/types/types';
	import { collection } from 'firebase/firestore';
	import { onDestroy, onMount } from 'svelte';
	import { get } from 'svelte/store';
	let unsubscribeFromMessages: (() => void) | undefined;
	let messageText: string;
	let messageList: Message[] = [];
	$: messageList;
	let userProfileData = get(userProfile$);
	let otherUserProfile: UserProfile;
	export let data: { conversationId: string };

	const onSend = async () => {
		if (userProfileData && messageText) {
			await addNewMessage(data.conversationId, {
				text: messageText,
				senderUid: userProfileData?.userUid ?? ''
			});
			messageText = '';
		}
	};

	onMount(async () => {
		const conversation = await getConversationById(data.conversationId);
		const otherUserUid =
			conversation.userId1 !== userProfileData?.userUid
				? conversation.userId1
				: conversation.userId2;
		otherUserProfile = await getUserProfileByUid(otherUserUid);
		unsubscribeFromMessages = listenToMessagesByConversationId(
			data.conversationId,
			(newMessages: Message[]) => {
				messageList = newMessages;
			}
		);
	});
	onDestroy(() => {
		if (unsubscribeFromMessages) {
			unsubscribeFromMessages();
		}
	});
</script>

<div>Messages with: {otherUserProfile?.userDisplayName}</div>

{#each messageList as message}
	<div>{message.text}</div>
{/each}
<form on:submit={onSend}>
	<input type="text" bind:value={messageText} />
	<button type="submit">Send</button>
</form>
