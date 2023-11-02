<script lang="ts">
	import { goto } from '$app/navigation';
	import { createSweet } from '$lib/services/sweet/sweet';
	import { SweetType } from '$lib/types/types';
	import { get } from 'svelte/store';
	import Post from '../lib/components/post.svelte';
	import { userProfileStore } from '$lib/store/store';
	let active = '';

	function onSubmitSweet(event: CustomEvent<any>) {
		createSweet({ sweetType: SweetType.SWEET }, event.detail.text);
	}
	function gotoProfile() {
		const userProfileData = get(userProfileStore);
		goto(`/profile/${userProfileData?.userUid}`);
	}
</script>

<nav class="sidebar">
	<a href="/" class={active === '' ? 'active' : ''}>Home</a>
	<a href="/search" class={active === 'search' ? 'active' : ''}>Search</a>
	<a href="/messages" class={active === 'messages' ? 'active' : ''}>Messages</a>
	<Post buttonName="Post" on:submit={(event) => onSubmitSweet(event)} />
	<button
		on:click={gotoProfile}
		aria-label="Go to profile"
		class={active === 'profile' ? 'active' : ''}>Profile</button
	>
</nav>
