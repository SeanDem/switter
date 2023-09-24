import { user, userPublic } from './../../store/store';
import { addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { getCommentsSubCollection } from '../collections';
import { isUserAuth, handleFirestoreError } from '../utils';
import { get } from 'svelte/store';
import type { User } from '@firebase/auth';
import type { Sweet, UserPublic } from '$lib/types';

export async function createComment(tweetId: string, comment: string): Promise<string> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const commentsCol = getCommentsSubCollection(tweetId);
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

		const docRef = await addDoc(commentsCol, commentDoc);
		return docRef.id;
	});
}

export async function getComments(tweetId: string): Promise<Sweet[]> {
	return handleFirestoreError(async () => {
		const commentsCol = getCommentsSubCollection(tweetId);
		const snapshot = await getDocs(commentsCol);
		if (snapshot.empty) return [];
		console.log('snapshot.docs', snapshot.docs);
		console.log(snapshot.docs.map((doc) => doc.data()));
		return snapshot.docs.map((doc) => doc.data()) as Sweet[];
	});
}

export async function updateComment(
	tweetId: string,
	commentId: string,
	updatedComment: any
): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const commentDoc = doc(getCommentsSubCollection(tweetId), commentId);
		await updateDoc(commentDoc, updatedComment);
	});
}

export async function deleteComment(tweetId: string, commentId: string): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const commentDoc = doc(getCommentsSubCollection(tweetId), commentId);
		await deleteDoc(commentDoc);
	});
}
