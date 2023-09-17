<script lang="ts">
	import { user } from '$lib/store/store';
	import Navbar from './shared/navbar.svelte';
	import 'firebase/auth';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import type { User } from 'firebase/auth';
	import Login from './shared/login.svelte';
	import { userProfileExists } from '$lib/services/user/public';
	import Profile from './shared/profile.svelte';

	const auth = getAuth();
	let userProfile = false;

	onAuthStateChanged(auth, (authUser: User | null) => {
		user.set(authUser);
		if (authUser) {
			checkUserProfile(authUser);
		}
	});
	async function checkUserProfile(authUser: User) {
		const userId = await authUser.getIdToken();
		userProfile = await userProfileExists(userId);
	}
</script>

{#if $user}
	<Navbar />
	<slot />
{:else if !$user}
	<Login />
{/if}

<style global>
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
</style>
