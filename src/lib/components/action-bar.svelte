<script lang="ts">
	import { incrementSweetProperty } from '$lib/services/sweet/increment-decrement';
	import { SweetType, type Sweet, type SweetDetail, SWEETS_SUBCOLLECTION } from '$lib/types/types';
	import Post from './post.svelte';
	import { userProfile$ } from '$lib/store/store';
	import { get } from 'svelte/store';
	import { isUserInSubCollection } from '$lib/services/sweet/sub-collections';
	import { onMount } from 'svelte';
	import { createSweet } from '$lib/services/sweet/sweet';
	export let sweetDetail: SweetDetail;
	const userProfileData = get(userProfile$);

	onMount(async () => {
		sweetDetail.isLiked = await isUserInSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.LIKERS,
			sweetDetail.user.userUid
		);
		sweetDetail.isReSweeted = await isUserInSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.RETWEETERS,
			sweetDetail.user.userUid
		);
	});

	function onComment(event: CustomEvent<any>) {
		sweetDetail.sweet.commentsCount += 1;
		createSweet(
			{ sweetType: SweetType.COMMENT, userUid: userProfileData?.userUid },
			event.detail.text
		);
		incrementSweetProperty(sweetDetail.sweet.id ?? '', 'commentsCount');
	}

	function onReSweet() {
		sweetDetail.sweet.retweetsCount += 1;
		createSweet({ refSweetId: sweetDetail.sweet.id, sweetType: SweetType.RE_SWEET }, '');
		incrementSweetProperty(sweetDetail.sweet.id ?? '', 'retweetsCount');
	}

	function onLike() {
		sweetDetail.sweet.likesCount += 1;
		incrementSweetProperty(sweetDetail.sweet.id ?? '', 'likesCount');
	}
</script>

<div class="h-px bg-gray-200" />
<div class="w-full flex justify-start">
	<div class="flex-grow text-center">
		<Post
			buttonName={`💬 ${sweetDetail.sweet.commentsCount ?? 0}`}
			on:submit={(event) => {
				onComment(event);
			}}
		/>
	</div>
	<button class="flex-grow" on:click={onReSweet} disabled={sweetDetail.isLiked}>
		🔁 {sweetDetail.sweet.retweetsCount ?? 0}
	</button>
	<button class="flex-grow" on:click={onLike} disabled={sweetDetail.isReSweeted}>
		👍 {sweetDetail.sweet.likesCount ?? 0}
	</button>
</div>
<div class="h-px bg-gray-200" />