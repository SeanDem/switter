<script lang="ts">
	import { goto } from '$app/navigation';
	import SweetCard from '$lib/components/sweet-card.svelte';
	import { getOrCreateConversationIdByUserID } from '$lib/services/messages';
	import type { SweetDetail, UserProf } from '$lib/types/types';

	export let data: { userProf: UserProf; sweetDetailList: SweetDetail[]; uid: string };
	$: userProfile = data.userProf;
	$: sweetDetailList = data.sweetDetailList;
	$: uid = data.uid;

	function isProfilePage() {
		return uid === userProfile.uid;
	}

	const onSettingsClicked = (): void => {
		goto(`${userProfile.uid}/settings`);
	};

	function onFollow() {
		console.log('follow');
	}

	async function onMessage() {
		const conversationId = await getOrCreateConversationIdByUserID(userProfile.uid);
		goto(`/messages/${conversationId}`);
	}
</script>

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
