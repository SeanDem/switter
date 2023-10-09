<script lang="ts">
	import { onMount } from 'svelte';
	import SweetCard from '../../shared/sweet-card.svelte';
	import { getAllSweetDetail } from '$lib/services/sweet/sweet';
	import { SweetType, type SweetDetail } from '$lib/types';

	let sweetDetailList: SweetDetail[];

	onMount(async () => {
		sweetDetailList = await getAllSweetDetail({ sweetType: SweetType.SWEET });
	});
</script>

{#if sweetDetailList}
	{#each sweetDetailList as sweetDetail (sweetDetail.sweet.id)}
		<SweetCard {sweetDetail} />
	{/each}
{:else}
	<div>Loading...</div>
{/if}
