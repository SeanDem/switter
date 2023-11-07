<script lang="ts">
	import SweetCard from '$lib/components/sweet-card.svelte';
	import type { SweetDetail } from '$lib/types/types';

	export let data: { sweetDetailList: SweetDetail[] };
	$: sweetDetailList = data.sweetDetailList;
</script>

{#if sweetDetailList}
	{#each sweetDetailList as sweetDetail}
		<SweetCard {sweetDetail} />
	{/each}
{/if}
