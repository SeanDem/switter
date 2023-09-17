<script lang="ts">
	import type { SweetInfo } from '$lib/types';

	export let sweetInfo: SweetInfo;
	const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' }).format(
		sweetInfo.sweet.timestamp.toDate()
	);
</script>

<div class="shadow-md w-96">
	<div class="flex">
		<div>
			<div class="flex items-center mb-2">
				<span class="font-bold">{sweetInfo.sweet.userId}</span>
				<span class="text-info-content ml-2">{sweetInfo.userProfile.handle}</span>
				<span class="text-info-content ml-2">.</span>
				<span class="text-gray-500 ml-2">{formattedDate}</span>
			</div>
			<p>{sweetInfo.sweet.text}</p>
		</div>
	</div>
</div>
