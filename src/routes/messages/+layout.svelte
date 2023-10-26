<script lang="ts">
	import type { Conversation, UserProfile } from '$lib/types';
	import { formatDateSmall } from '$lib/utils/data';
	export let data: { conversationList: Conversation[] };
</script>

{#if data.conversationList}
	{#each data.conversationList as conversation}
		<div role="button" tabindex="0" on:keydown={() => {}}>
			<span>{conversation.lastMessage}</span>
			<span>{formatDateSmall(conversation.lastTimestamp)}</span>
		</div>
	{/each}
{/if}
<slot />
<!-- on:click={() => getConversation(conversation.id ?? '')} -->
