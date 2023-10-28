<script lang="ts">
	import type { SweetDetail } from '$lib/types/types';
	import { formatDateLarge } from '$lib/utils/data';
	import { onMount } from 'svelte';
	import ActionsBar from './action-bar.svelte';
	import { getSweetDetail } from '$lib/services/sweet/sweet';
	import { goto } from '$app/navigation';
	export let comment: SweetDetail;

	//ideally i would like to remove this. Since, however, it can recuse forever i think we need load in the component
	onMount(() => {
		getSweetDetail(comment.sweet.id ?? '').then((data) => {
			comment = { ...comment, ...data };
		});
	});
	function onCommentClicked(): any {
		goto(`/sweet/${comment.sweet.id}`);
	}
</script>

<div class="shadow-md w-96 bg-theme-bg rounded p-4">
	<div
		class="cursor-pointer hover:bg-gray-200"
		role="button"
		tabindex="0"
		on:keydown={() => {}}
		on:click={() => onCommentClicked()}
	>
		<div class="flex items-center mb-2">
			<span class="font-bold text-theme-text">{comment.user.userDisplayName}</span>
			<span class="text-theme-secondary ml-2">@{comment.user.handle}</span>
			<span class="text-gray-500 ml-2">{formatDateLarge(comment.sweet.timestamp)}</span>
		</div>

		<p class="text-theme-text">{comment.sweet.text}</p>
	</div>

	<ActionsBar sweet={comment.sweet} />
</div>
