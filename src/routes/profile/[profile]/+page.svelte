<script lang="ts">
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';
	import { userProfileStore } from '$lib/store/store';
	import { getOrCreateConversationIdByUserID } from '$lib/services/messages';
	import SweetCard from '$lib/components/sweet-card.svelte';
	import { onMount } from 'svelte';
	import { getUserProfileByUid } from '$lib/services/user/profile';
	import { getAllSweetDetail } from '$lib/services/sweet/sweet';
	import { SweetType, type SweetDetail, type UserProfile } from '$lib/types/types';
	import { page } from '$app/stores';

	let userProfile: UserProfile;
	let sweetDetailList: SweetDetail[];
	let userUid: string;

	let isLoading = true;
	onMount(async () => {
		userUid = get(userProfileStore)?.userUid ?? '';

		userProfile = await getUserProfileByUid($page.params.profile);
		sweetDetailList = await getAllSweetDetail({
			sweetType: SweetType.SWEET,
			userUid: userUid
		});

		isLoading = false;
	});

	function isProfilePage() {
		return userUid === userProfile.userUid;
	}

	const onSettingsClicked = (): void => {
		goto(`${userProfile.userUid}/settings`);
	};

	function onFollow() {
		goto(`/messages/${userProfile.userUid}`);
	}
	async function onMessage() {
		const conversationId = await getOrCreateConversationIdByUserID(userProfile.userUid);
		goto(`/messages/${conversationId}`);
	}
</script>

{#if isLoading}
	<div>Loading...</div>
{:else}
	{#if isProfilePage()}
		<button on:click={onSettingsClicked}>Settings</button>
	{:else}
		<button on:click={onMessage}>Message</button>
		<button on:click={onFollow}>Follow</button>
	{/if}

	{#if sweetDetailList && sweetDetailList.length > 0}
		{#each sweetDetailList as sweetDetail (sweetDetail.sweet.id)}
			<SweetCard {sweetDetail} />
		{/each}
	{:else}
		<div>No sweets available</div>
	{/if}
{/if}
