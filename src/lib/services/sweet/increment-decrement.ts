import { doc, increment, updateDoc } from 'firebase/firestore';
import { handleFirestoreError, isUserAuth } from '../utils';
import { sweetsCollection } from './collection';

export async function incrementSweetProperty(
	tweetId: string,
	property: 'likesCount' | 'retweetsCount' | 'commentsCount'
): Promise<void> {
	return handleFirestoreError(async () => {
		const tweetDoc = doc(sweetsCollection, tweetId);
		await updateDoc(tweetDoc, { [property]: increment(1) });
	});
}

export async function decrementSweetProperty(
	tweetId: string,
	property: 'likesCount' | 'retweetsCount' | 'commentsCount'
): Promise<void> {
	return handleFirestoreError(async () => {
		const tweetDoc = doc(sweetsCollection, tweetId);
		await updateDoc(tweetDoc, { [property]: increment(-1) });
	});
}
