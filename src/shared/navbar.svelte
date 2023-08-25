<!-- src/components/Navbar.svelte -->
<script>
	let active = 'home'; // This is just a placeholder. Adjust as needed.
</script>

<nav class="sidebar">
	<a href="/" class={active === 'home' ? 'active' : ''}>Home</a>
	<a href="/home" class={active === 'home' ? 'active' : ''}>Home</a>
	<a href="/search" class={active === 'search' ? 'active' : ''}>Search</a>
	<a href="/notifications" class={active === 'notifications' ? 'active' : ''}>Notifications</a>
	<a href="/messages" class={active === 'messages' ? 'active' : ''}>Messages</a>
	<a href="/profile" class={active === 'profile' ? 'active' : ''}>Profile</a>
	<a href="/more" class={active === 'more' ? 'active' : ''}>More</a>
	<a href="/post" class={active === 'post' ? 'active' : ''}>Post</a>
	<a href="/profile" class={active === 'profile' ? 'active' : ''}>Profile</a>
</nav>

<style>
	.sidebar {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 220px;
		background-color: white;
	}

	.sidebar a {
		display: block;
		padding: 0.5rem 1rem;
		margin-bottom: 0.5rem;
		font-size: 24px;
		color: black;
		text-decoration: none;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}

	.active {
		font-weight: bold;
	}
</style>
