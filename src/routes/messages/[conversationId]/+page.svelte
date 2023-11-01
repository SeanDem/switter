<script lang="ts">
	import {
		addNewMessage,
		getConversationById,
		listenToMessagesByConversationId
	} from '$lib/services/messages';
	import { getUserProfileByUid } from '$lib/services/user/profile';
	import { userProfile$ } from '$lib/store/store';
	import type { Message, UserProfile } from '$lib/types/types';
	import { onDestroy, onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';

	let unsubscribeFromMessages: (() => void) | undefined;
	let messageText: string;
	let messageList: Message[] = [];
	let userProfileData = get(userProfile$);
	let otherUserProfile: UserProfile;

	const onSend = async () => {
		if (userProfileData && messageText) {
			await Promise.all([
				addNewMessage($page.params.conversationId, {
					text: messageText,
					senderUid: userProfileData?.userUid ?? ''
				}),
				Promise.resolve((messageText = ''))
			]);
		}
	};

	onMount(async () => {
		const conversation = await getConversationById($page.params.conversationId);
		const otherUserUid =
			conversation.userId1 !== userProfileData?.userUid
				? conversation.userId1
				: conversation.userId2;
		otherUserProfile = await getUserProfileByUid(otherUserUid);
		unsubscribeFromMessages = listenToMessagesByConversationId(
			$page.params.conversationId,
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
