import { doc, updateDoc, increment } from 'firebase/firestore';
import { isUserAuth, handleFirestoreError } from '../utils';
import { tweetsCollection } from '../collections';

export async function incrementLikes(tweetId: string): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const tweetDoc = doc(tweetsCollection, tweetId);
		await updateDoc(tweetDoc, { likesCount: increment(1) });
	});
}

export async function decrementLikes(tweetId: string): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const tweetDoc = doc(tweetsCollection, tweetId);
		await updateDoc(tweetDoc, { likesCount: increment(-1) });
	});
}
