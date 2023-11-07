<script lang="ts">
	export let data: { following: string[] };
	$: followers = data.following;
</script>

{#each followers as follow}
	<div>{follow}</div>
{/each}
