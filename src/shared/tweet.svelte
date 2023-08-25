<script>
	let username = 'John Doe';
	let handle = '@john_doe';
	let tweetContent = 'This is a sample tweet made using Svelte and daisyUI. #SvelteRocks';
	let timestamp = '1h ago';
</script>

<div class="tweet-card bg-white shadow-md">
	<div class="flex">
		<!-- Profile Picture -->

		<!-- Tweet Content -->
		<div>
			<div class="flex items-center mb-2">
				<span class="font-bold">{username}</span>
				<span class="text-gray-500 ml-2">{handle}</span>
				<span class="text-gray-500 ml-2">·</span>
				<span class="text-gray-500 ml-2">{timestamp}</span>
			</div>
			<p>{tweetContent}</p>
		</div>
	</div>
</div>

<style>
	/* Custom styling, adjust as needed */
	.tweet-card {
		width: 500px;
		border-radius: 10px;
		padding: 15px;
		border: 1px solid #e1e8ed;
	}
</style>
