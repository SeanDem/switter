<script lang="ts">
	import { goto } from '$app/navigation';
	import type { UserProfile } from '$lib/types';
	export let user: UserProfile;

	function onCardClick() {
		goto(`/profile/${user.userUid}`);
	}

	function follow() {
		console.log('Follow button clicked for user:', user.userUid);
	}

	function message() {
		console.log('message button');
	}
</script>

<div role="button" tabindex="0" on:click={onCardClick} on:keydown={() => {}}>
	<img src={user.userProfileUrl} alt="{user.userDisplayName}'s profile picture" />
	<div>{user.userDisplayName ?? ''}</div>
	<div>@{user.handle ?? ''}</div>
	<div>{user.bio ?? ''}</div>
	<button on:click|stopPropagation={follow}>Follow</button>
</div>
