<script lang="ts">
	import { page } from '$app/stores';
	import { addNewMessage, listenToMessagesByConversationId } from '$lib/services/messages';
	import { userProfileStore } from '$lib/store/store';
	import type { Message, UserProf } from '$lib/types/types';
	import { onDestroy, onMount } from 'svelte';

	let unsubscribeFromMessages: (() => void) | undefined;
	let messageText: string = '';
	let messageList: Message[] = [];
	const userProfile: UserProf | null = $userProfileStore;
	export let otherUserProfile: UserProf = {
		uid: '',
		profileUrl: '',
		bio: '',
		birthday: '',
		followersCount: 0,
		followingCount: 0
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

	const onSend = async (event: Event) => {
		event.preventDefault();
		if (userProfile && messageText) {
			await addNewMessage($page.params.conversationId, {
				text: messageText,
				uid: userProfile.uid
			});
			messageText = '';
		}
	};
</script>

<div>Messages with: {otherUserProfile?.displayName}</div>

{#each messageList as message}
	<div>{message.text}</div>
{/each}

<form on:submit={onSend}>
	<input type="text" bind:value={messageText} />
	<button type="submit">Send</button>
</form>
