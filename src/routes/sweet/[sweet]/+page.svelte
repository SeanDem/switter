<script lang="ts">
	import CommentCard from '$lib/components/comment-card.svelte';
	import SweetCard from '$lib/components/sweet-card.svelte';
	import type { SweetDetail } from '$lib/types/types';

	export let data: { sweetDetail: SweetDetail };
	$: sweetDetail = data.sweetDetail
</script>

<SweetCard {sweetDetail} />
{#if sweetDetail.comments}
	{#each sweetDetail.comments as commentDetail}
		<CommentCard {commentDetail} />
	{/each}
{/if}
