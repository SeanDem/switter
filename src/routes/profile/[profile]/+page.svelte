<script lang="ts">
	import { onMount } from 'svelte';
	import { getAllSweetDetail } from '$lib/services/sweet/sweet';
	import { SweetType, type SweetDetail, type UserProfile } from '$lib/types';
	import { goto } from '$app/navigation';
	import SweetCard from '../../../shared/sweet-card.svelte';
	import { get } from 'svelte/store';
	import { userAuth } from '$lib/store/store';

	export let data: UserProfile;
	let sweetDetailList: SweetDetail[];
	const userUid = get(userAuth)?.uid;
	onMount(async () => {
		sweetDetailList = await getAllSweetDetail({
			sweetType: SweetType.SWEET,
			userUid: data.userUid
		});
	});

	function isProfilePage() {
		return userUid === data.userUid;
	}

	const onSettingsClicked = (): void => {
		goto(`${data.userUid}/settings`);
	};


	function follow() {
	}
</script>

{#if isProfilePage()}
	<button on:click={onSettingsClicked}>Settings</button>
{:else}
	<button on:click={follow}>Follow</button>
{/if}

{#if sweetDetailList}
	{#each sweetDetailList as sweetDetail (sweetDetail.sweet.id)}
		<SweetCard {sweetDetail} />
	{/each}
{:else}
	<div>Loading...</div>
{/if}
