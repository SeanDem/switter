<script lang="ts">
	import { app } from '$lib';
	import {
		GoogleAuthProvider,
		signInWithPopup,
		createUserWithEmailAndPassword,
		onAuthStateChanged,
		getAuth
	} from 'firebase/auth';

	let email: string = '';
	let password: string = '';

	const auth = getAuth(app);

	function signUpWithGoogle(): void {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	}

	function signUpWithEmail(): void {
		createUserWithEmailAndPassword(auth, email, password);
	}

	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log('User signed up:', user);
		}
	});
</script>

<h2>Sign Up</h2>
<button on:click={signUpWithGoogle}>
	<img
		src="https://developers.google.com/identity/images/g-logo.png"
		alt="Google Logo"
		style="height: 20px; vertical-align: middle;"
	/> Sign up with Google
</button>

<div>
	<input bind:value={email} placeholder="Email" type="email" />
	<input bind:value={password} placeholder="Password" type="password" />
	<button on:click={signUpWithEmail}>Sign up with Email</button>
</div>
