<script lang="ts">
	import { formatDateSmall } from '$lib/utils/data';
	import type { SweetDetail, Sweet } from '$lib/types/types';
	import ActionBar from './action-bar.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let sweetDetail: SweetDetail;

	const onTweetClicked = (): void => {
		const sweetId = sweetDetail.sweet.id;
		if ($page.params.sweet !== sweetId) goto(`/sweet/${sweetId}`);
	};
</script>

<div class="shadow-md w-96 bg-theme-bg rounded p-4">
	<div
		class="cursor-pointer hover:bg-gray-200"
		role="button"
		tabindex="0"
		on:keydown={() => {}}
		on:click={() => onTweetClicked()}
	>
		<div class="flex items-center mb-2">
			<span class="font-bold text-theme-text">{sweetDetail.user.userDisplayName}</span>
			<span class="text-theme-secondary ml-2">@{sweetDetail.user.handle}</span>
			<span class="text-gray-500 ml-2">{formatDateSmall(sweetDetail.sweet.timestamp)}</span>
		</div>
		<p class="text-theme-text">{sweetDetail.sweet.text}</p>
	</div>

	<ActionBar {sweetDetail} />
</div>
