<script lang="ts">
	import { userAuth } from '$lib/store/store';
	import type { UserProfileAndInfo } from '$lib/types/types';
	import { signOut } from 'firebase/auth';
	import { auth } from '$lib/services/firebase';

	export let userProfileAndInfo: Partial<UserProfileAndInfo> = {};

	const handleFileChange = (event: Event) => {
		console.log('need to handle file change');
	};

	const submitProfile = () => {
		if (!$userAuth) return;
		if (!userProfileAndInfo.displayName || !userProfileAndInfo.handle) {
			alert('Name and handle are required.');
			return;
		}
		duplicateFields();
	};
	const duplicateFields = () => {
		userProfileAndInfo.userDisplayName = userProfileAndInfo.displayName ?? '';
		userProfileAndInfo.userProfileUrl = userProfileAndInfo.handle;
		userProfileAndInfo.userUid = userProfileAndInfo.userUid;
	};
</script>

<div>
	Profile information
	<br />
	<div>
		<span>Following: {userProfileAndInfo.followingCount ?? 0}</span>
		<span> Followers: {userProfileAndInfo.followingCount ?? 0}<span /></span>
	</div>
	<label>
		Name: <input type="text" bind:value={userProfileAndInfo.displayName} required />
	</label>
	<br />

	<label>
		Handle: @ <input type="text" bind:value={userProfileAndInfo.handle} required />
	</label>
	<br />

	<label>
		Email: <input type="text" bind:value={userProfileAndInfo.email} required />
	</label>
	<br />

	<label>
		Phone Number: <input type="text" bind:value={userProfileAndInfo.phoneNumber} />
	</label>
	<br />

	<label>
		Birthday: <input type="date" bind:value={userProfileAndInfo.birthday} />
	</label>
	<br />

	<label>
		Bio: <input type="text" bind:value={userProfileAndInfo.bio} />
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
