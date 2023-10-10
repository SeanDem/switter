<script lang="ts">
	import { fetchAllUsers } from '$lib/services/user/profile';
	import type { UserProfile } from '$lib/types';
	import ProfileCard from '../../shared/profile-card.svelte';

	let users: UserProfile[] = [];
	async function onGetUsers() {
		users = await fetchAllUsers();
	}
</script>

<input type="text" placeholder="Search..." />
<button on:click={onGetUsers}>Get All Users</button>

{#each users as user}
	<ProfileCard {user} />
{/each}
