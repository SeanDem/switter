<script lang="ts">
	import { incrementSweetProperty } from '$lib/services/sweet/increment-decrement';
	import { createSweet, createTweet } from '$lib/services/sweet/sweet';
	import { SweetType, type Sweet } from '$lib/types';
	import Post from './post.svelte';
	import { userProfile } from '$lib/store/store';
	import { get } from 'svelte/store';

	export let sweet: Sweet;
	const userProfileData = get(userProfile);

	function onComment(event: CustomEvent<any>) {
		sweet.commentsCount += 1;
		createTweet(
			{ sweetType: SweetType.COMMENT, userUid: userProfileData?.userUid },
			event.detail.text
		);
		incrementSweetProperty(sweet.id ?? '', 'commentsCount');
	}

	function onReSweet() {
		sweet.retweetsCount += 1;
		createSweet({ refSweetId: sweet.id, sweetType: SweetType.RE_SWEET }, '');
		incrementSweetProperty(sweet.id ?? '', 'retweetsCount');
	}

	function onLike() {
		sweet.likesCount += 1;
		incrementSweetProperty(sweet.id ?? '', 'likesCount');
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
