<script lang="ts">
	import { goto } from '$app/navigation';
	import type { SweetDetail } from '$lib/types/types';
	import { formatDateSmall } from '$lib/utils/data';
	import ActionsBar from './action-bar.svelte';

	export let commentDetail: SweetDetail;
</script>

<div class="shadow-md w-96 bg-theme-bg rounded p-4">
	<div
		class="cursor-pointer hover:bg-gray-200"
		role="button"
		tabindex="0"
		on:keydown={() => {}}
		on:click={() => goto(`/sweet/${commentDetail.sweet.id}`)}
	>
		<div class="flex items-center mb-2">
			<span class="font-bold text-theme-text">{commentDetail.user.displayName}</span>
			<span class="text-theme-secondary ml-2">@{commentDetail.user.handle}</span>
			<span class="text-gray-500 ml-2">{formatDateSmall(commentDetail.sweet.timestamp)}</span>
		</div>

		<p class="text-theme-text">{commentDetail.sweet.text}</p>
	</div>

	<ActionsBar sweetDetail={commentDetail} />
</div>
