<script lang="ts">
	import { page } from '$app/stores';
	import { addNewMessage, listenToMessagesByConversationId } from '$lib/services/messages';
	import { userProfileStore } from '$lib/store/store';
	import type { Message, UserProfile } from '$lib/types/types';
	import { onDestroy, onMount } from 'svelte';
	export let data: { otherUserProfile: UserProfile; messageList: Message[] };

	let unsubscribeFromMessages: (() => void) | undefined;
	let messageText: string;
	let messageList: Message[] = [];
	const userProfile: UserProfile | null = $userProfileStore;
	const otherUserProfile: UserProfile = data.otherUserProfile;

	const onSend = async () => {
		if (userProfile && messageText) {
			await addNewMessage($page.params.conversationId, {
				text: messageText,
				senderUid: userProfile.userUid
			});
			messageText = '';
		}
	};

	onMount(() => {
		unsubscribeFromMessages = listenToMessagesByConversationId(
			$page.params.conversationId,
			(newMessages) => (messageList = newMessages)
		);
	});

	onDestroy(() => {
		unsubscribeFromMessages?.();
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
