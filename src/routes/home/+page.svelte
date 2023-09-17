<script lang="ts">
	import { getAllSweetInfo } from '$lib/services/sweet';
	import type { Sweet, SweetInfo } from '$lib/types';
	import Layout from '../../layout.svelte';
	import Tweet from '../../shared/tweet.svelte';

	let sweetUserData: SweetInfo[] = [];
	getAllSweetInfo().then((data) => {
		sweetUserData = data;
	});
</script>

<Layout>
	{#each sweetUserData as sweetInfo}
		<Tweet {sweetInfo} />
	{/each}
</Layout>
