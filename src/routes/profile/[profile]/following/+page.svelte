<script lang="ts">
	export let data: { following: string[] };
	$: followers = data.following ?? [];
</script>

<div>Following</div>
{#each followers as follow}
	<div>{follow}</div>
{/each}
