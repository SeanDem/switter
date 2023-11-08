<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { follow } from '$lib/services/userProfile/userProfileService';
	import type { UserProf } from '$lib/types/types';
	export let user: UserProf;

	function onCardClick() {
		if ($page.route) {
		}
		goto(`/profile/${user.uid}`);
	}

	const onFollow = () => {
		console.log('follow button');
		if (!$page.route.id) return;
		follow($page.route.id, user.uid);
	};
</script>

<div role="button" tabindex="0" on:click={onCardClick} on:keydown={() => {}}>
	<img src={user.handle} alt="{user.displayName}'s profile picture" />
	<div>{user.displayName ?? ''}</div>
	<div>@{user.handle ?? ''}</div>
	<div>{user.bio ?? ''}</div>
	<button on:click={onFollow}>Follow</button>
</div>
