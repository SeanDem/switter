<script lang="ts">
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';
	import { userAuth } from '$lib/store/store';
	import type { SweetDetail, UserProfile } from '$lib/types';
	import { getOrCreateConversationIdByUserID } from '$lib/services/messages';
	import SweetCard from '$lib/components/sweet-card.svelte';

	export let data: { sweetDetailList: SweetDetail[]; userPofile: UserProfile };
	const userUid = get(userAuth)?.uid;

	function isProfilePage() {
		return userUid === data.userPofile.userUid;
	}

	const onSettingsClicked = (): void => {
		goto(`${data.userPofile.userUid}/settings`);
	};

	function onFollow() {
		goto(`/messages/${data.userPofile.userUid}`);
	}
	async function onMessage() {
		const conversationId = await getOrCreateConversationIdByUserID(data.userPofile.userUid);
		goto(`/messages/${conversationId}`);
	}
</script>

{#if isProfilePage()}
	<button on:click={onSettingsClicked}>Settings</button>
{:else}
	<button on:click={onMessage}>Message</button>
	<button on:click={onFollow}>Follow</button>
{/if}

{#if data.sweetDetailList}
	{#each data.sweetDetailList as sweetDetail (sweetDetail.sweet.id)}
		<SweetCard {sweetDetail} />
	{/each}
{:else}
	<div>Loading...</div>
{/if}
