<script lang="ts">
	import type { Sweet, SweetInfo } from '$lib/types';
	import { formatDateLarge } from '$lib/utils/data';
	import ActionsBar from './action-bar.svelte';
	export let comment: SweetInfo;
</script>

<div>
	<p>{comment.userPublic.userDisplayName}</p>
	<p>{comment.sweet.text}</p>
	<p>{formatDateLarge(comment.sweet.timestamp)}</p>
	<ActionsBar sweetInfo={comment} />
</div>
