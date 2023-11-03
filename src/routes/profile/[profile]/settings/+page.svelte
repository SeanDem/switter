<script lang="ts">
	import { goto } from '$app/navigation';
	import Profile from '$lib/components/profile.svelte';
	import type { UserProf } from '$lib/types/types';

	export let data: { userProfile: UserProf };
	$: userProfile = data.userProfile;

	const onBackClicked = (): void => {
		goto(`/profile/${userProfile?.uid}`);
	};
</script>

<button on:click={onBackClicked}>Back</button>
<Profile userProfile = {data.userProfile} />
