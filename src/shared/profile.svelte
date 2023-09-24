<script lang="ts">
	import { onMount } from 'svelte';
	import { user } from '$lib/store/store';
	import { fetchCurrentUserProfileData, updateUserProfile } from '$lib/services/user/facade';
	import type { UserProfile } from '$lib/types';
	import { signOut } from 'firebase/auth';
	import { auth } from '$lib/firebase';

	let userProfile: Partial<UserProfile> = {};

	onMount(async () => {
		const userData = await fetchCurrentUserProfileData();
		if (userData) userProfile = userData;
	});
	const handleFileChange = (event: Event) => {
		console.log('need to handle file change');
	};

	const submitProfile = () => {
		if (!$user) return;
		if (!userProfile.displayName || !userProfile.handle) {
			alert('Name and handle are required.');
			return;
		}
		duplicateFields();
		updateUserProfile(userProfile as UserProfile);
	};
	const duplicateFields = () => {
		userProfile.userDisplayName = userProfile.displayName ?? '';
		userProfile.userProfileUrl = userProfile.handle;
		userProfile.userUid = userProfile.bio;
	};
</script>

<div>
	Profile information
	<br />
	<div>
		<span>Following: {userProfile.followingCount ?? 0}</span>
		<span> Followers: {userProfile.followingCount ?? 0}<span /></span>
	</div>
	<label>
		Name: <input type="text" bind:value={userProfile.displayName} required />
	</label>
	<br />

	<label>
		Handle: @ <input type="text" bind:value={userProfile.handle} required />
	</label>
	<br />

	<label>
		Email: <input type="text" bind:value={userProfile.email} required />
	</label>
	<br />

	<label>
		Phone Number: <input type="text" bind:value={userProfile.phoneNumber} />
	</label>
	<br />

	<label>
		Birthday: <input type="date" bind:value={userProfile.birthday} />
	</label>
	<br />

	<label>
		Bio: <input type="text" bind:value={userProfile.bio} />
	</label>
	<br />

	<label>
		Profile Picture: <input type="file" on:change={handleFileChange} />
	</label>
	<br />

	<button on:click={submitProfile}>Submit</button>
	<br />

	<button on:click={() => signOut(auth)}>Logout</button>
</div>

