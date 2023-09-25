<script lang="ts">
	import { onMount } from 'svelte';
	import type { Sweet } from '$lib/types';
	import Tweet from '../../shared/tweet.svelte';
	import { getAllTweets } from '$lib/services/sweet/sweet';

	let sweets: Sweet[];
	onMount(async () => {
		sweets = await getAllTweets();
	});
</script>

{#if sweets}
	{#each sweets as sweet (sweet.id)}
		<div />
		<Tweet {sweet} />
	{/each}
{:else}
	<div>Loading...</div>
{/if}
