<script lang="ts">
	import SweetCard from '$lib/components/sweet-card.svelte';
	import type { SweetDetail } from '$lib/types/types';

	export let data: { sweetDetailList: SweetDetail[] };
	$ : data.sweetDetailList
</script>

{#if data}
	{#each data.sweetDetailList as sweetDetail}
		<SweetCard {sweetDetail} />
	{/each}
{:else}
	<div>Loading...</div>
{/if}
