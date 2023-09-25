<script lang="ts">
	import { createComment } from '$lib/services/sweet/comment';
	import { incrementLikes } from '$lib/services/sweet/like';
	import type { Sweet, SweetInfo } from '$lib/types';
	import Post from './post.svelte';
	export let sweet: Sweet;

	function onComment(event: CustomEvent<any>) {
		createComment(sweet.id ?? '', event.detail.text);
	}

	function onReSweet() {
		console.log('Retweeted!');
	}

	function onLike() {
		incrementLikes(sweet.id ?? '');
	}
</script>

<div class="h-px bg-gray-200" />
<div class="w-full flex justify-start">
	<div class="flex-grow text-center">
		<Post
			buttonName={`💬 ${sweet.commentsCount ?? 0}`}
			on:submit={(event) => {
				onComment(event);
			}}
		/>
	</div>
	<button class="flex-grow" on:click={onReSweet}>
		🔁 {sweet.retweetsCount ?? 0}
	</button>
	<button class="flex-grow" on:click={onLike}>
		👍 {sweet.likesCount ?? 0}
	</button>
</div>
<div class="h-px bg-gray-200" />
