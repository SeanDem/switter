import { user, userPublic } from './../../store/store';
import {
	addDoc,
	getDocs,
	updateDoc,
	deleteDoc,
	doc,
	serverTimestamp,
	query,
	where
} from 'firebase/firestore';
import { isUserAuth, handleFirestoreError } from '../utils';
import { get } from 'svelte/store';
import type { Sweet, UserPublic } from '$lib/types';
import { commentsCollection } from '../collections';

export async function createComment(tweetId: string, comment: string): Promise<string> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const currentUser: UserPublic | null = get(userPublic);
		if (!currentUser) throw new Error('User not authenticated');

		const commentDoc: Sweet = {
			text: comment,
			timestamp: serverTimestamp(),
			likesCount: 0,
			commentsCount: 0,
			retweetsCount: 0,
			userUid: currentUser.userUid,
			userDisplayName: currentUser.userDisplayName,
			userProfileUrl: currentUser.userProfileUrl,
			handle: currentUser.handle
		};

		const docRef = await addDoc(commentsCollection, commentDoc); // add to the main 'comments' collection
		return docRef.id;
	});
}

export async function getComments(tweetId: string): Promise<Sweet[]> {
	return handleFirestoreError(async () => {
		const querySnapshot = await getDocs(query(commentsCollection, where('tweetId', '==', tweetId)));
		if (querySnapshot.empty) return [];
		return querySnapshot.docs.map((doc) => doc.data()) as Sweet[];
	});
}

export async function updateComment(commentId: string, updatedComment: any): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const commentDoc = doc(commentsCollection, commentId);
		await updateDoc(commentDoc, updatedComment);
	});
}

export async function deleteComment(commentId: string): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const commentDoc = doc(commentsCollection, commentId);
		await deleteDoc(commentDoc);
	});
}
