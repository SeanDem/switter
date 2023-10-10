<script lang="ts">
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';
	import Profile from '../../../../shared/profile.svelte';
	import { userProfile } from '$lib/store/store';

	const userProfileData = get(userProfile);
	const onBackClicked = (): void => {
		goto(`/profile/${userProfileData?.userUid}`);
	};
</script>

<button on:click={onBackClicked}>Back</button>
<Profile />
