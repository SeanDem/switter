<script lang="ts">
	import { onMount } from 'svelte';
	import SweetCard from '../../shared/sweet-card.svelte';
	import { getAllSweetDetail } from '$lib/services/sweet/sweet';
	import { SweetType, type SweetDetail } from '$lib/types';
	import { userProfile } from '$lib/store/store';
	import { get } from 'svelte/store';
	import { goto } from '$app/navigation';

	let sweetDetailList: SweetDetail[];
	onMount(async () => {
		const userProfileData = get(userProfile);
		sweetDetailList = await getAllSweetDetail({
			sweetType: SweetType.SWEET,
			userUid: userProfileData?.userUid
		});
	});

	const onSettingsClicked = (): void => {
		goto(`/profile/settings`);
	};
</script>

<button on:click={onSettingsClicked}>Settings</button>

{#if sweetDetailList}
	{#each sweetDetailList as sweetDetail (sweetDetail.sweet.id)}
		<SweetCard {sweetDetail} />
	{/each}
{:else}
	<div>Loading...</div>
{/if}
