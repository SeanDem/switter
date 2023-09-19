<script lang="ts">
	import { onMount } from 'svelte';
	import { getSweetsWithUserInfo } from '$lib/services/sweet/facade';
	import type { SweetInfo } from '$lib/types';
	import Tweet from '../../shared/tweet.svelte';

	let sweetInfoList: SweetInfo[];
	onMount(async () => {
		sweetInfoList = await getSweetsWithUserInfo();
	});
</script>

{#if sweetInfoList}
	{#each sweetInfoList as sweetInfo}
		<Tweet {sweetInfo} />
	{/each}
{:else}
	<div>Loading...</div>
{/if}
