<script lang="ts">
	import { userAuth, userProfile$ } from '$lib/store/store';
	import 'firebase/auth';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import type { User as FirebaseUser } from 'firebase/auth';
	import Navbar from './navbar.svelte';
	import type { UserProfile } from '$lib/types/types';
	import { getUserPublic } from '$lib/services/user/profile';
	import Login from '$lib/components/login.svelte';
	import Profile from '$lib/components/profile.svelte';
	import { get } from 'svelte/store';
	import { auth } from '$lib/services/firebase';

	let userProfileCompleted = false;
	let loading = true;

	onAuthStateChanged(auth, async (authUser: FirebaseUser | null) => {
		userAuth.set(authUser);
		if (authUser) {
			userProfileCompleted = await checkAndSetUserProfile(authUser);
		}
		loading = false;
	});

	async function checkAndSetUserProfile(authUser: FirebaseUser): Promise<boolean> {
		const res: UserProfile = await getUserPublic(authUser);
		userProfile$.set(res);
		return !!res && !!res.handle && !!res.userDisplayName && !!res.userUid;
	}
</script>

{#if loading}
	<p>Loading...</p>
{:else if !$userAuth}
	<Login />
{:else if $userAuth && !userProfileCompleted}
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
