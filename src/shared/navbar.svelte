<script lang="ts">
	import { createTweet } from '$lib/services/sweet/sweet';
	import Post from './post.svelte';
	let active = '';
</script>

<nav class="sidebar">
	<a href="/home" class={active === 'home' ? 'active' : ''}>Home</a>
	<a href="/search" class={active === 'search' ? 'active' : ''}>Search</a>
	<a href="/messages" class={active === 'messages' ? 'active' : ''}>Messages</a>
	<Post
		buttonName="Post"
		on:submit={(event) => {
			createTweet(event.detail.text);
		}}
	/>
	<a href="/profile" class={active === 'profile' ? 'active' : ''}>Profile</a>
</nav>
