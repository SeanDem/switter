import { auth } from '$lib/firebase';
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	OAuthProvider,
	signInAnonymously,
	createUserWithEmailAndPassword
} from 'firebase/auth';
import type { UserCredential } from 'firebase/auth';

export async function signGoogle(): Promise<UserCredential> {
	const provider = new GoogleAuthProvider();
	return await signInWithPopup(auth, provider);
}

export async function signApple(): Promise<UserCredential> {
	const provider = new OAuthProvider('apple.com');
	return await signInWithPopup(auth, provider);
}

export async function signInEmail(email: string, password: string): Promise<UserCredential> {
	return await signInWithEmailAndPassword(auth, email, password);
}

export async function signUpEmail(email: string, password: string): Promise<UserCredential> {
	return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signAnonymously(): Promise<UserCredential> {
	return await signInAnonymously(auth);
}
