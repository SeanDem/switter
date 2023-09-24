<script lang="ts">
	import { getComments } from '$lib/services/sweet/comment';
	import type { Sweet, SweetInfo } from '$lib/types';
	import { onMount } from 'svelte';
	import Tweet from '../../../shared/tweet.svelte';
	export let data: SweetInfo;

	let comments: Sweet[] = [];
	onMount(async () => {
		comments = await getComments(data.sweet.id ?? '');
	});
</script>

<Tweet sweetInfo={data} />
