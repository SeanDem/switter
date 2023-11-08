<script lang="ts">
	import Login from '$lib/components/login.svelte';
	import Profile from '$lib/components/profile.svelte';
	import { auth } from '$lib/services/firebase';
	import { getUserPublic } from '$lib/services/user/profile';
	import { userAuthStore, userProfileStore } from '$lib/store/store';
	import 'firebase/auth';
	import type { User as FirebaseUser } from 'firebase/auth';
	import { onAuthStateChanged } from 'firebase/auth';
	import type { UserProf } from '$lib/types/types';
	import Navbar from './navbar.svelte';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';

	$: userProfileCompleted = false;
	let loading = true;
	if (typeof window !== 'undefined') {
		onAuthStateChanged(auth, async (authUser: FirebaseUser | null) => {
			document.cookie = `uid = ${authUser?.uid}`;
			userAuthStore.set(authUser);
			if (authUser) {
				userProfileCompleted = await checkAndSetUserProfile(authUser);
			}
			loading = false;
		});
	}

	async function checkAndSetUserProfile(authUser: FirebaseUser): Promise<boolean> {
		const res: UserProf = await getUserPublic(authUser);
		userProfileStore.set(res);
		return !!res && !!res.handle && !!res.displayName && !!res.uid;
	}

	beforeNavigate(({ to, cancel }) => {
		if ($page.url.pathname === to?.url.pathname) cancel();
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if !$userAuthStore}
	<Login />
{:else if $userAuthStore && !userProfileCompleted}
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
