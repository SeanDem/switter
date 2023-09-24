<script lang="ts">
	import { user, userPublic } from '$lib/store/store';
	import 'firebase/auth';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import type { User as FirebaseUser } from 'firebase/auth';
	import Navbar from '../shared/navbar.svelte';
	import Login from '../shared/login.svelte';
	import Profile from '../shared/profile.svelte';
	import type { UserPublic } from '$lib/types';
	import { getUserPublic } from '$lib/services/user/profile';

	const auth = getAuth();
	let userProfileCompleted = false;
	let loading = true;

	onAuthStateChanged(auth, async (authUser: FirebaseUser | null) => {
		user.set(authUser);
		if (authUser) {
			userProfileCompleted = await checkAndSetUserProfile(authUser);
		}
		loading = false;
	});

	async function checkAndSetUserProfile(authUser: FirebaseUser): Promise<boolean> {
		const res: UserPublic = await getUserPublic(authUser);
		userPublic.set(res);
		return !!res.handle && !!res.userDisplayName;
	}
</script>

{#if loading}
	<p>Loading...</p>
{:else if !$user}
	<Login />
{:else if $user && !userProfileCompleted}
	<Profile />
{:else}
	<Navbar />
	<slot />
{/if}

<style global>
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
</style>
