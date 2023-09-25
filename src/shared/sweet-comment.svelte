<script lang="ts">
	import type { Sweet, SweetInfo } from '$lib/types';
	import { formatDateLarge } from '$lib/utils/data';
	import ActionsBar from './action-bar.svelte';
	export let sweetComment: Sweet;
</script>

<div>
	<p>{sweetComment.userDisplayName}</p>
	<p>{sweetComment.text}</p>
	<p>{formatDateLarge(sweetComment.timestamp)}</p>
	<ActionsBar sweet={sweetComment} />
</div>
