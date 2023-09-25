import { handle } from './../../../hooks';
import { userPublic } from './../../store/store';
import { serverTimestamp } from '@firebase/firestore';
import {
	addDoc,
	getDoc,
	updateDoc,
	deleteDoc,
	doc,
	getDocs,
	query,
	orderBy
} from 'firebase/firestore';
import { tweetsCollection } from '../collections';
import { isUserAuth, handleFirestoreError } from '../utils';
import type { Sweet } from '$lib/types';
import { get } from 'svelte/store';

export async function createTweet(text: string): Promise<string> {
	const userPublicData = get(userPublic);
	if (!userPublicData) throw new Error('User not authenticated');

	const tweet: Sweet = {
		text,
		timestamp: serverTimestamp(),
		likesCount: 0,
		commentsCount: 0,
		retweetsCount: 0,
		userUid: userPublicData.userUid,
		userDisplayName: userPublicData.userDisplayName,
		userProfileUrl: userPublicData.userProfileUrl,
		handle: userPublicData.handle
	};

	return handleFirestoreError(async () => {
		isUserAuth();
		const docRef = await addDoc(tweetsCollection, tweet);
		return docRef.id;
	});
}

export async function getSweet(tweetId: string): Promise<Sweet> {
	return handleFirestoreError(async () => {
		const tweetDoc = doc(tweetsCollection, tweetId);
		const tweetSnapshot = await getDoc(tweetDoc);
		return {
			id: tweetSnapshot.id,
			...tweetSnapshot.data()
		};
	});
}

export async function getAllTweets(): Promise<Sweet[]> {
	return handleFirestoreError(async () => {
		const q = query(tweetsCollection, orderBy('timestamp', 'desc')); // Sorting by timestamp in descending order
		const snapshot = await getDocs(q);
		return snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));
	});
}

export async function updateTweet(tweetId: string, updatedTweet: Sweet): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const tweetDoc = doc(tweetsCollection, tweetId);
		await updateDoc(tweetDoc, { updatedTweet });
	});
}

export async function deleteTweet(tweetId: string): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const tweetDoc = doc(tweetsCollection, tweetId);
		await deleteDoc(tweetDoc);
	});
}
