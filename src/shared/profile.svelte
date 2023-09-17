<script lang="ts">
	import { addUserProfile } from '$lib/services/user/public';
	import { user } from '$lib/store/store';
	import type { UserProfile } from '$lib/types';
	let userProfile: Partial<UserProfile> = {
		uid: undefined,
		handle: undefined,
		birthday: undefined,
		phoneNumber: undefined
	};

	const handleFileChange = (event: Event) => {
		console.log('need to handle file change');
	};

	const submitProfile = () => {
		if (!$user) return;
		userProfile.uid = $user.uid;
		addUserProfile(userProfile as UserProfile);
	};
</script>

<div>
	Please finish filling out your profile information
	<br />

	<label>
		Handle:
		<input type="text" bind:value={userProfile.handle} />
	</label>
	<label>
		Birthday:
		<input type="date" bind:value={userProfile.birthday} />
	</label>
	<label>
		Profile Picture:
		<input type="file" on:change={handleFileChange} />
	</label>
	<label>
		Phone Number:
		<input type="text" bind:value={userProfile.phoneNumber} />
	</label>
	<button on:click={submitProfile}>Submit</button>
</div>
