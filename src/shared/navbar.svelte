<script lang="ts">
	import { goto } from '$app/navigation';
	import { createTweet } from '$lib/services/sweet/sweet';
	import { SweetType } from '$lib/types';
	import { get } from 'svelte/store';
	import Post from './post.svelte';
	import { userProfile } from '$lib/store/store';
	let active = '';

	function onSubmitSweet(event: CustomEvent<any>) {
		createTweet({ sweetType: SweetType.SWEET }, event.detail.text);
	}
	function gotoProfile() {
		const userProfileData = get(userProfile);
		goto(`/profile/${userProfileData?.userUid}`);
	}
</script> 

<nav class="sidebar">
	<a href="/home" class={active === 'home' ? 'active' : ''}>Home</a>
	<a href="/search" class={active === 'search' ? 'active' : ''}>Search</a>
	<a href="/messages" class={active === 'messages' ? 'active' : ''}>Messages</a>
	<Post buttonName="Post" on:submit={(event) => onSubmitSweet(event)} />
	<button on:click={gotoProfile} aria-label="Go to profile" class={active === 'profile' ? 'active' : ''}>Profile</button>
</nav>
