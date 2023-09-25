<script lang="ts">
	import { getComments } from '$lib/services/sweet/comment';
	import type { Sweet } from '$lib/types';
	import { onMount } from 'svelte';
	import Tweet from '../../../shared/tweet.svelte';
	import SweetComment from '../../../shared/sweet-comment.svelte';

	export let sweet: Sweet;
	let sweetComments: Sweet[] = [];
	onMount(async () => {
		sweetComments = await getComments(sweet.id ?? '');
	});
</script>

{#if sweet}
	<Tweet {sweet} />
	{#each sweetComments as sweetComment}
		<SweetComment {sweetComment} />
	{/each}
{:else}
	<div>404 Sweet not found</div>
{/if}
