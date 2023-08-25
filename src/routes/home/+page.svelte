<script lang="ts">
	import { getCurrentUserId, getTweets } from '$lib/db';
	import Layout from '../../layout.svelte';
	import Tweet from '../../shared/tweet.svelte';
</script>

<Layout>
	<Tweet />
</Layout>
