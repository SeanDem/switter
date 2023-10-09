<script lang="ts">
	import { createTweet } from '$lib/services/sweet/sweet';
	import { SweetType } from '$lib/types';
	import Post from './post.svelte';
	let active = '';

	function onSubmitSweet(event: CustomEvent<any>) {
		createTweet({ sweetType: SweetType.COMMENT }, event.detail.text);
	}
</script>

<nav class="sidebar">
	<a href="/home" class={active === 'home' ? 'active' : ''}>Home</a>
	<a href="/search" class={active === 'search' ? 'active' : ''}>Search</a>
	<a href="/messages" class={active === 'messages' ? 'active' : ''}>Messages</a>
	<Post buttonName="Post" on:submit={(event) => onSubmitSweet(event)} />
	<a href="/profile" class={active === 'profile' ? 'active' : ''}>Profile</a>
</nav>
