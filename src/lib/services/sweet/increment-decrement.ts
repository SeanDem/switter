import type { Sweet } from '$lib/types/types';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { isUserAuth, handleFirestoreError } from '../utils';
import { sweetsCollection } from './collection';

export async function incrementSweetProperty(
	tweetId: string,
	property: 'likesCount' | 'retweetsCount' | 'commentsCount'
): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const tweetDoc = doc(sweetsCollection, tweetId);
		await updateDoc(tweetDoc, { [property]: increment(1) });
	});
}

export async function decrementSweetProperty(
	tweetId: string,
	property: 'likesCount' | 'retweetsCount' | 'commentsCount'
): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const tweetDoc = doc(sweetsCollection, tweetId);
		await updateDoc(tweetDoc, { [property]: increment(-1) });
	});
}
