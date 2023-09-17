<!-- src/components/Navbar.svelte -->
<script lang="ts">
	import Post from './post.svelte';
	let active = '';
</script>

<nav class="sidebar">
	<a href="/home" class={active === 'home' ? 'active' : ''}>Home</a>
	<a href="/search" class={active === 'search' ? 'active' : ''}>Search</a>
	<a href="/messages" class={active === 'messages' ? 'active' : ''}>Messages</a>
	<Post />
	<a href="/profile" class={active === 'profile' ? 'active' : ''}>Profile</a>
</nav>
