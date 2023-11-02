<script lang="ts">
	import type { UserProfile } from '$lib/types/types';
	import ProfileCard from '../../lib/components/profile-card.svelte';
	export let data: { users: UserProfile[] };
	const users: UserProfile[] = data.users;
</script>

<input type="text" placeholder="Search..." />

{#each users as user}
	<ProfileCard {user} />
{/each}
