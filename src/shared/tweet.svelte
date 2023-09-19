<script lang="ts">
	import { incrementLikes } from '$lib/services/sweet/like';
	import type { SweetInfo } from '$lib/types';
	import { FieldValue, Timestamp } from 'firebase/firestore';

	export let sweetInfo: SweetInfo;
	function formatDate(timestamp: Timestamp | FieldValue | undefined) {
		if (timestamp instanceof Timestamp) {
			const now = new Date();
			const postDate = timestamp.toDate();
			const diffInMs = now.getTime() - postDate.getTime();
			const diffInSec = diffInMs / 1000;
			const diffInMin = diffInSec / 60;
			const diffInHrs = diffInMin / 60;

			if (diffInMin < 60) {
				return Math.round(diffInMin) + 'm';
			} else if (diffInHrs < 24) {
				return Math.round(diffInHrs) + 'h';
			} else {
				return new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' }).format(
					postDate
				);
			}
		}
		return '';
	}
</script>

<div class="shadow-md w-96 bg-theme-bg p-4 rounded">
	<div class="flex">
		<div>
			<div class="flex items-center mb-2">
				<span class="font-bold text-theme-text">{sweetInfo.userProfile.userDisplayName}</span>
				<span class="text-theme-secondary ml-2">@{sweetInfo.userProfile.handle}</span>
				<span class="text-gray-500 ml-2">{formatDate(sweetInfo.sweet.timestamp)}</span>
			</div>
			<p class="text-theme-text">{sweetInfo.sweet.text}</p>
			<div>
				<button> Comments: {sweetInfo.sweet.commentsCount ?? 0}</button>
				<button>Retweets: {sweetInfo.sweet.retweetsCount ?? 0}</button>
				<button on:click={() => incrementLikes(sweetInfo.sweet.id ?? '')}
					>Likes: {sweetInfo.sweet.likesCount ?? 0}</button
				>
			</div>
		</div>
	</div>
</div>
