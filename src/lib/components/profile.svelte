<script lang="ts">
	import { goto } from '$app/navigation';
	import { updateUserProfile } from '$lib/services/user/facade';
	import { userAuthStore } from '$lib/store/store';
	import type { UserProf } from '$lib/types/types';

	export let userProfile: UserProf = {
		uid: '',
		profileUrl: '',
		bio: '',
		birthday: '',
		followersCount: 0,
		followingCount: 0,
		email: undefined
	};

	const onHandleFileChange = (event: Event) => {
		console.log('need to handle file change');
	};

	const submitProfile = () => {
		if (!$userAuthStore) return;
		if (!userProfile.displayName || !userProfile.handle) {
			alert('Name and handle are required.');
			return;
		}
		updateUserProfile(userProfile);
		goto('/');
	};
	const onSignout = () => {
		document.cookie = 'uid=;';
	};
</script>

<div>
	<div>
		Profile information
		<br />
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
		Profile Picture: <input type="file" on:change={onHandleFileChange} />
	</label>
	<br />

	<button on:click={submitProfile}>Save</button>
	<br />

	<button on:click={onSignout}>Logout</button>
</div>
