import type { Sweet } from '$lib/types';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { isUserAuth, handleFirestoreError } from '../utils';
import { sweetsCollection } from '../collections';

export async function incrementSweetProperty(tweetId: string, property: keyof Sweet): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const tweetDoc = doc(sweetsCollection, tweetId);
		await updateDoc(tweetDoc, { [property]: increment(1) });
	});
}

export async function decrementSweetProperty(tweetId: string, property: keyof Sweet): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const tweetDoc = doc(sweetsCollection, tweetId);
		await updateDoc(tweetDoc, { [property]: increment(-1) });
	});
}
