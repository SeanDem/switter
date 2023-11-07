<script lang="ts">
	import {
		decrementSweetProperty,
		incrementSweetProperty
	} from '$lib/services/sweet/increment-decrement';
	import { addToSubCollection, removeFromSubCollection } from '$lib/services/sweet/sub-collections';
	import { createSweet, getAndDeleteSweet } from '$lib/services/sweet/sweet';
	import { userProfileStore } from '$lib/store/store';
	import { SWEETS_SUBCOLLECTION, SweetType, type SweetDetail } from '$lib/types/types';
	import { get } from 'svelte/store';
	import Post from './post.svelte';
	import { invalidateAll } from '$app/navigation';

	export let sweetDetail: SweetDetail;
	const userProfileData = get(userProfileStore);

	function onComment(event: CustomEvent<any>) {
		const previousComment = sweetDetail.isCommented;
		sweetDetail.isCommented = !previousComment;
		try {
			sweetDetail.sweet.commentsCount += 1;
			createSweet(
				{
					sweetType: SweetType.COMMENT,
					uid: userProfileData?.uid,
					refSweetId: sweetDetail.sweet.id
				},
				event.detail.text
			);
			incrementSweetProperty(sweetDetail.sweet.id ?? '', 'commentsCount');
			addToSubCollection(
				sweetDetail.sweet.id ?? '',
				SWEETS_SUBCOLLECTION.COMMENTERS,
				userProfileData?.uid ?? ''
			);
		} catch {
			sweetDetail.isReSweeted = previousComment;
		}

		invalidateAll();
	}

	function onReSweet() {
		const previousResweet = sweetDetail.isReSweeted;
		sweetDetail.isReSweeted = !previousResweet;
		try {
			previousResweet ? unResweet() : resweet();
		} catch {
			sweetDetail.isReSweeted = previousResweet;
		}
	}

	function resweet() {
		sweetDetail.sweet.retweetsCount += 1;
		createSweet({ refSweetId: sweetDetail.sweet.id, sweetType: SweetType.RE_SWEET }, '');
		incrementSweetProperty(sweetDetail.sweet.id ?? '', 'retweetsCount');
		addToSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.RETWEETERS,
			userProfileData?.uid ?? ''
		);
	}

	function unResweet() {
		sweetDetail.sweet.retweetsCount -= 1;
		decrementSweetProperty(sweetDetail.sweet.id ?? '', 'retweetsCount');
		removeFromSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.RETWEETERS,
			userProfileData?.uid ?? ''
		);
		getAndDeleteSweet({
			uid: userProfileData?.uid,
			refSweetId: sweetDetail.sweet.id,
			sweetType: SweetType.RE_SWEET
		});
	}

	async function onLike() {
		const previousIsLiked = sweetDetail.isLiked;
		sweetDetail.isLiked = !previousIsLiked;
		try {
			previousIsLiked ? unLike() : like();
		} catch {
			sweetDetail.isLiked = previousIsLiked;
		}
	}

	function like() {
		sweetDetail.sweet.likesCount += 1;
		incrementSweetProperty(sweetDetail.sweet.id ?? '', 'likesCount');
		addToSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.LIKERS,
			userProfileData?.uid ?? ''
		);
	}
	function unLike() {
		sweetDetail.sweet.likesCount -= 1;
		decrementSweetProperty(sweetDetail.sweet.id ?? '', 'likesCount');
		removeFromSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.LIKERS,
			userProfileData?.uid ?? ''
		);
	}
</script>

<div class="h-px bg-gray-200" />
<div class="w-full flex justify-start">
	<div
		class="flex-grow text-center"
		class:bg-green-400={sweetDetail.isCommented}
		class:bg-red-400={!sweetDetail.isCommented}
	>
		<Post
			buttonName={`💬 ${sweetDetail.sweet.commentsCount ?? 0}`}
			on:submit={(event) => {
				onComment(event);
			}}
		/>
	</div>
	<button
		class="flex-grow"
		class:bg-green-400={sweetDetail.isReSweeted}
		class:bg-red-400={!sweetDetail.isReSweeted}
		on:click={onReSweet}
	>
		🔁 {sweetDetail.sweet.retweetsCount ?? 0}
	</button>
	<button
		class="flex-grow"
		class:bg-green-400={sweetDetail.isLiked}
		class:bg-red-400={!sweetDetail.isLiked}
		on:click={onLike}
	>
		👍 {sweetDetail.sweet.likesCount ?? 0}
	</button>
</div>
<div class="h-px bg-gray-200" />
