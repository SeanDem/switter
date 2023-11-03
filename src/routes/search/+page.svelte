<script lang="ts">
	import ProfileCard from '$lib/components/profile-card.svelte';
	import type { UserProf } from '$lib/types/types';
	export let data: { users: UserProf[] };
	$: users = data.users;
</script>

<input type="text" placeholder="Search..." />
{#each users as user}
	<ProfileCard {user} />
{/each}
