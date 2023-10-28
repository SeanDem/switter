<script lang="ts">
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';
	import { userProfile$ } from '$lib/store/store';
	import type { UserProfileAndInfo } from '$lib/types/types';
	import Profile from '$lib/components/profile.svelte';

	export let data: UserProfileAndInfo;
	const userProfileData = get(userProfile$);
	const onBackClicked = (): void => {
		goto(`/profile/${userProfileData?.userUid}`);
	};
</script>

<button on:click={onBackClicked}>Back</button>
<Profile userProfileAndInfo={data} />
