<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import SweetCard from '$lib/components/sweet-card.svelte';
	import { addFollowerAndFollowing } from '$lib/services/follow/followService';
	import { getOrCreateConversationIdByUserID } from '$lib/services/messages';
	import type { SweetDetail, UserProf } from '$lib/types/types';

	export let data: { userProfile: UserProf; uid: string };
	$: userProfile = data.userProfile;
	$: uid = data.uid;
	$: isProfilePage = userProfile.uid === uid;

	const onSettingsClicked = (): void => {
		goto(`${userProfile.uid}/settings`);
	};

	function onFollow() {}

	async function onMessage() {
		const conversationId = await getOrCreateConversationIdByUserID(userProfile.uid);
		goto(`/messages/${conversationId}`);
	}

	const goToFollowers = () => {
		goto(`/profile/${userProfile.uid}/followers`);
	};
	const goToFollowing = () => {
		goto(`/profile/${userProfile.uid}/following`);
	};
</script>

{#if isProfilePage}
	<button on:click={onSettingsClicked}>Settings</button>
{:else}
	<button on:click={onMessage}>Message</button>
	<button on:click={onFollow}>Follow</button>
{/if}

<a href="/following" on:click|preventDefault={goToFollowing}
	>Following {userProfile.followingCount}</a
>
<a href="/followers" on:click|preventDefault={goToFollowers}
	>Followers {userProfile.followingCount}</a
>
<slot />
