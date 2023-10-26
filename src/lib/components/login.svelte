<script lang="ts">
	import { signGoogle, signUpEmail } from '$lib/services/auth';
	let email = '';
	let password = '';

	async function handleEmailSignUp() {
		const user = await signUpEmail(email, password);
	}
</script>

<div>Please log in or create an account</div>
<br />
<button on:click={signGoogle}>Google</button>
<br />
<input bind:value={email} placeholder="Email" />
<input type="password" bind:value={password} placeholder="Password" />
<button on:click={handleEmailSignUp}>Create Account</button>
<br />
<input bind:value={email} placeholder="Email" />
<input type="password" bind:value={password} placeholder="Password" />
<button on:click={handleEmailSignUp}>Sign in with Email</button>
<br />
