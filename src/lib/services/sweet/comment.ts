import { addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getCommentsSubCollection } from '../collections';
import { isUserAuth, handleFirestoreError } from '../utils';

export async function createComment(tweetId: string, comment: any): Promise<string> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const commentsCol = getCommentsSubCollection(tweetId);
		const docRef = await addDoc(commentsCol, comment);
		return docRef.id;
	});
}

export async function getComments(tweetId: string): Promise<Comment[]> {
	return handleFirestoreError(async () => {
		const commentsCol = getCommentsSubCollection(tweetId);
		const snapshot = await getDocs(commentsCol);
		if (snapshot.empty) {
			return [];
		}
		return snapshot.docs.map((doc) => doc.data()) as Comment[];
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
