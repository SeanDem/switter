<script lang="ts">
	import { createComment } from '$lib/services/sweet/comment';
	import { incrementLikes } from '$lib/services/sweet/like';
	import type { SweetInfo } from '$lib/types';
	import Post from './post.svelte';
	export let sweetInfo: SweetInfo;

	function onComment(event: CustomEvent<any>) {
		createComment(sweetInfo.sweet.id ?? '', event.detail.text);
	}

	function onReSweet() {
		console.log('Retweeted!');
	}

	function onLike() {
		incrementLikes(sweetInfo.sweet.id ?? '');
	}
</script>

<div class="h-px bg-gray-200" />
<div class="w-full flex justify-start">
	<div class="flex-grow">
		<Post
			buttonName="💬"
			on:submit={(event) => {
				onComment(event);
			}}>{sweetInfo.sweet.commentsCount ?? 0}</Post
		>
	</div>

	<button class="flex-grow" on:click={onReSweet}>
		🔁 {sweetInfo.sweet.retweetsCount ?? 0}
	</button>
	<button class="flex-grow" on:click={onLike}>
		👍 {sweetInfo.sweet.likesCount ?? 0}
	</button>
</div>
<div class="h-px bg-gray-200" />
