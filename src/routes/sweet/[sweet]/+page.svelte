<script lang="ts">
	import SweetCard from '../../../shared/sweet-card.svelte';
	import CommentCard from '../../../shared/comment-card.svelte';
	import type { SweetDetail } from '$lib/types';

	export let data: SweetDetail;
	console.log(data);
</script>

{#if data}
	<SweetCard sweetDetail={data} />
	{#if data.comments}
		{#each data.comments as comment}
			<CommentCard {comment} />
		{/each}
	{/if}
{:else}
	<div>404 Sweet not found</div>
{/if}
