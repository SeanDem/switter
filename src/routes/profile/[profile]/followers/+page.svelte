<script lang="ts">
	export let data: { followers: string[] };
	$: followers = data.followers ?? [];
</script>

<div>Followers</div>
{#each followers as follower}
	<div>{follower}</div>
{/each}
