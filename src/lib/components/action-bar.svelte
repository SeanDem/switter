<script lang="ts">
	import {
		decrementSweetProperty,
		incrementSweetProperty
	} from '$lib/services/sweet/increment-decrement';
	import {
		addToSubCollection,
		isUserInSubCollection,
		removeFromSubCollection
	} from '$lib/services/sweet/sub-collections';
	import { createSweet, getAndDeleteSweet } from '$lib/services/sweet/sweet';
	import { userProfile$ } from '$lib/store/store';
	import { SWEETS_SUBCOLLECTION, SweetType, type SweetDetail } from '$lib/types/types';
	import { onMount } from 'svelte';
	import { get, writable } from 'svelte/store';
	import Post from './post.svelte';

	export let sweetDetail: SweetDetail;
	const userProfileData = get(userProfile$);
	let isLiked = writable(false);
	let isRetweeted = writable(false);
	let isCommented = writable(false);
	onMount(async () => {
		const likedRes = await isUserInSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.LIKERS,
			userProfileData?.userUid ?? ''
		);
		isLiked.set(!!likedRes);

		const resweetedRes = await isUserInSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.RETWEETERS,
			userProfileData?.userUid ?? ''
		);
		isRetweeted.set(!!resweetedRes);

		const commentedRes = await isUserInSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.COMMENTERS,
			userProfileData?.userUid ?? ''
		);
		isCommented.set(!!commentedRes);
	});
	function onComment(event: CustomEvent<any>) {
		sweetDetail.sweet.commentsCount += 1;
		createSweet(
			{ sweetType: SweetType.COMMENT, userUid: userProfileData?.userUid },
			event.detail.text
		);
		incrementSweetProperty(sweetDetail.sweet.id ?? '', 'commentsCount');
		addToSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.COMMENTERS,
			userProfileData?.userUid ?? ''
		);
		isCommented.set(true);
	}

	function onReSweet() {
		const previousResweet = $isRetweeted;
		isRetweeted.set(!previousResweet);
		try {
			previousResweet ? unResweet() : resweet();
		} catch {
			isRetweeted.set(previousResweet);
		}
	}

	function resweet() {
		sweetDetail.sweet.retweetsCount += 1;
		createSweet({ refSweetId: sweetDetail.sweet.id, sweetType: SweetType.RE_SWEET }, '');
		incrementSweetProperty(sweetDetail.sweet.id ?? '', 'retweetsCount');
		addToSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.RETWEETERS,
			userProfileData?.userUid ?? ''
		);
	}
	function unResweet() {
		sweetDetail.sweet.retweetsCount -= 1;
		decrementSweetProperty(sweetDetail.sweet.id ?? '', 'retweetsCount');
		removeFromSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.RETWEETERS,
			userProfileData?.userUid ?? ''
		);
		getAndDeleteSweet({
			userUid: userProfileData?.userUid,
			refSweetId: sweetDetail.sweet.id,
			sweetType: SweetType.RE_SWEET
		});
	}

	async function onLike() {
		const previousIsLiked = $isLiked;
		isLiked.set(!previousIsLiked);
		try {
			previousIsLiked ? unLike() : like();
		} catch {
			isLiked.set(previousIsLiked);
		}
	}

	function like() {
		sweetDetail.sweet.likesCount += 1;
		incrementSweetProperty(sweetDetail.sweet.id ?? '', 'likesCount');
		addToSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.LIKERS,
			userProfileData?.userUid ?? ''
		);
	}
	function unLike() {
		sweetDetail.sweet.likesCount -= 1;
		decrementSweetProperty(sweetDetail.sweet.id ?? '', 'likesCount');
		removeFromSubCollection(
			sweetDetail.sweet.id ?? '',
			SWEETS_SUBCOLLECTION.LIKERS,
			userProfileData?.userUid ?? ''
		);
	}
</script>

<div class="h-px bg-gray-200" />
<div class="w-full flex justify-start">
	<div
		class="flex-grow text-center"
		class:bg-green-400={$isCommented}
		class:bg-red-400={!$isCommented}
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
		class:bg-green-400={$isRetweeted}
		class:bg-red-400={!$isRetweeted}
		on:click={onReSweet}
	>
		🔁 {sweetDetail.sweet.retweetsCount ?? 0}
	</button>
	<button
		class="flex-grow"
		class:bg-green-400={$isLiked}
		class:bg-red-400={!$isLiked}
		on:click={onLike}
	>
		👍 {sweetDetail.sweet.likesCount ?? 0}
	</button>
</div>
<div class="h-px bg-gray-200" />
