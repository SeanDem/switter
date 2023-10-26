<script lang="ts">
	import CommentCard from '$lib/components/comment-card.svelte';
	import SweetCard from '$lib/components/sweet-card.svelte';
	import type { SweetDetail } from '$lib/types';

	export let data: SweetDetail;
</script>

<SweetCard sweetDetail={data} />
{#if data.comments}
	{#each data.comments as comment}
		<CommentCard {comment} />
	{/each}
{/if}
