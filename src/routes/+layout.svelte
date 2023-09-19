<script lang="ts">
	import { user } from '$lib/store/store';
	import 'firebase/auth';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import type { User as FirebaseUser } from 'firebase/auth';
	import Navbar from '../shared/navbar.svelte';
	import Login from '../shared/login.svelte';
	import Profile from '../shared/profile.svelte';
	import { userPrivateCollection, userProfileCollection } from '$lib/services/collections';
	import { doc, getDoc } from 'firebase/firestore';
	import type { UserPublic } from '$lib/types';

	const auth = getAuth();
	let userProfileCompleted = false;
	let loading = true;

	onAuthStateChanged(auth, async (authUser: FirebaseUser | null) => {
		user.set(authUser);
		if (authUser) userProfileCompleted = await checkUserProfile(authUser);
		loading = false;
	});

	async function checkUserProfile(authUser: FirebaseUser): Promise<boolean> {
		const userDocRef = doc(userProfileCollection, authUser.uid);
		const userDoc = await getDoc(userDocRef);
		const data = userDoc.data() as UserPublic;
		const isProfileCompleted = !!data.handle && !!data.userDisplayName;
		return isProfileCompleted;
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
