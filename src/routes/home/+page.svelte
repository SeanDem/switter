<script lang="ts">
	import SweetCard from '$lib/components/sweet-card.svelte';
	import type { SweetDetail } from '$lib/types';

	export let data: { sweetDetailList: SweetDetail[] };
</script>

{#if data}
	{#each data.sweetDetailList as sweetDetail (sweetDetail.sweet.id)}
		<SweetCard {sweetDetail} />
	{/each}
{:else}
	<div>Loading...</div>
{/if}
