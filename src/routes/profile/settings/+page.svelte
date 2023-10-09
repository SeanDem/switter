<script lang="ts">
	import { goto } from '$app/navigation';
	import Profile from '../../../shared/profile.svelte';
	const onBackClicked = (): void => {
		goto(`/profile`);
	};
</script>

<button on:click={onBackClicked}>Back</button>
<Profile />
