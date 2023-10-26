<script lang="ts">
	import type { LoadType } from './+page';

	export let data: LoadType;

	let messageText: string;
	const onSend = () => {
		console.log("addNewmessageFunction")
	};
</script>

<div>Messages with {data.otherUserProfile.userDisplayName}</div>

{#each data.messageList as message}
	<div>{message.content}</div>
{/each}
<input type="text" bind:value={messageText} /><button on:click={onSend}>Send</button>
