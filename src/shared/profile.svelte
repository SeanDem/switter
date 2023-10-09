<script lang="ts">
	import { onMount } from 'svelte';
	import { userAuth } from '$lib/store/store';
	import { fetchCurrentUserProfileData, updateUserProfile } from '$lib/services/user/facade';
	import type { UserProfileAndInfo } from '$lib/types';
	import { signOut } from 'firebase/auth';
	import { auth } from '$lib/firebase';

	let userProfile: Partial<UserProfileAndInfo> = {};

	onMount(async () => {
		const userData = await fetchCurrentUserProfileData();
		if (userData) userProfile = userData;
	});
	const handleFileChange = (event: Event) => {
		console.log('need to handle file change');
	};

	const submitProfile = () => {
		if (!$userAuth) return;
		if (!userProfile.displayName || !userProfile.handle) {
			alert('Name and handle are required.');
			return;
		}
		duplicateFields();
		updateUserProfile(userProfile as UserProfileAndInfo);
	};
	const duplicateFields = () => {
		userProfile.userDisplayName = userProfile.displayName ?? '';
		userProfile.userProfileUrl = userProfile.handle;
		userProfile.userUid = userProfile.userUid;
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

	<button on:click={submitProfile}>Save</button>
	<br />

	<button on:click={() => signOut(auth)}>Logout</button>
</div>
