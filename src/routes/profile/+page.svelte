<script>
	import { user } from '$lib/store/store';
	import { signOut } from 'firebase/auth';
	import Layout from '../../layout.svelte';
	import { auth } from '$lib/firebase';
</script>

<Layout>
	{#if $user}
		<div>
			<img src={$user?.photoURL} alt="{$user?.displayName}'s profile picture" />
			<h2>{$user?.displayName}</h2>
			<p>Email: {$user?.email}</p>
			<p>Phone: {$user?.phoneNumber}</p>
			<p>Provider: {$user?.providerId}</p>
			<p>UID: {$user?.uid}</p>
			<button on:click={() => signOut(auth)}>Logout</button>
		</div>
	{:else}
		<p>Loading $user? data...</p>
	{/if}
</Layout>
