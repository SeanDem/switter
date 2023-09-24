<script lang="ts">
	import { onMount } from 'svelte';
	import { getSweetsWithUserInfo } from '$lib/services/sweet/facade';
	import type { SweetInfo } from '$lib/types';
	import Tweet from '../../shared/tweet.svelte';
	import { goto } from '$app/navigation';

	let sweetInfoList: SweetInfo[];
	onMount(async () => {
		sweetInfoList = await getSweetsWithUserInfo();
	});
</script>

{#if sweetInfoList}
	{#each sweetInfoList as sweetInfo (sweetInfo.sweet.id)}
		<div />
		<Tweet {sweetInfo} />
	{/each}
{:else}
	<div>Loading...</div>
{/if}
