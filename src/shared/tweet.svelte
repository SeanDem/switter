<script lang="ts">
	import { formatDateSmall } from '$lib/utils/data';
	import type { Sweet } from '$lib/types';
	import ActionBar from './action-bar.svelte';
	import { goto } from '$app/navigation';

	export let sweet: Sweet;

	const onTweetClicked = (): void => {
		goto(`tweet/${sweet.id}`);
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
			<span class="font-bold text-theme-text">{sweet.userDisplayName}</span>
			<span class="text-theme-secondary ml-2">@{sweet.handle}</span>
			<span class="text-gray-500 ml-2">{formatDateSmall(sweet.timestamp)}</span>
		</div>
		<p class="text-theme-text">{sweet.text}</p>
	</div>

	<ActionBar {sweet} />
</div>
