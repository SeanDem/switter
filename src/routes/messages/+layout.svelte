<script lang="ts">
	import { goto } from '$app/navigation';
	import { getConversationsForUser } from '$lib/services/messages';
	import { userProfile$ } from '$lib/store/store';
	import type { Conversation, UserProfile } from '$lib/types/types';
	import { formatDateSmall } from '$lib/utils/data';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	let conversationList: Conversation[];
	let userProfileUid: string;
	onMount(async () => {
		userProfileUid = get(userProfile$)?.userUid ?? '';
		conversationList = await getConversationsForUser(userProfileUid);
	});
</script>

{#if conversationList}
	{#each conversationList as conversation}
		<div
			role="button"
			tabindex="0"
			on:click={() => goto(`/messages/${conversation.id}`)}
			on:keydown={() => {}}
		>
			<span>{conversation.lastMessage}----</span>
			<span>{formatDateSmall(conversation.lastTimestamp)}</span>
		</div>
	{/each}
{/if}
<slot />
