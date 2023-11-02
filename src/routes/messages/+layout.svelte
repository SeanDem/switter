<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Conversation } from '$lib/types/types';
	import { formatDateSmall } from '$lib/utils/data';
	export let data: { conversationList: Conversation[] };
	const conversationList = data.conversationList;
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
