<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import SweetCard from '$lib/components/sweet-card.svelte';
	import { getOrCreateConversationIdByUserID } from '$lib/services/messages';
	import { getAllSweetDetail } from '$lib/services/sweet/sweet';
	import { getUserProfileByUid } from '$lib/services/user/profile';
	import { userProfileStore } from '$lib/store/store';
	import { SweetType, type SweetDetail, type UserProf } from '$lib/types/types';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let userProfPage: UserProf;
	let sweetDetailList: SweetDetail[];
	let uid: string;

	let isLoading = true;
	onMount(async () => {
		uid = get(userProfileStore)?.uid ?? '';

		userProfPage = await getUserProfileByUid($page.params.profile);
		sweetDetailList = await getAllSweetDetail({
			sweetType: SweetType.SWEET,
			uid: uid
		});

		isLoading = false;
	});

	function isProfilePage() {
		return uid === userProfPage.uid;
	}

	const onSettingsClicked = (): void => {
		goto(`${uid}/settings`);
	};

	function onFollow() {
		console.log('follow');
	}

	async function onMessage() {
		const conversationId = await getOrCreateConversationIdByUserID(userProfPage.uid);
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
