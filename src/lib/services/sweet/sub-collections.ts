import { db } from '$lib/services/firebase';
import { SWEETS_SUBCOLLECTION, type SweetDetail } from '$lib/types/types';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	where,
	type CollectionReference,
	type DocumentData
} from 'firebase/firestore';
import { handleFirestoreError } from '../utils';
import { sweetsCollection } from './collection';

function getSubCollectionRef(
	sweetId: string,
	subCollectionName: SWEETS_SUBCOLLECTION
): CollectionReference<DocumentData> {
	const sweetDocInstance = doc(sweetsCollection, sweetId);
	return collection(sweetDocInstance, subCollectionName);
}

export async function removeDao(
	sweetId: string,
	subCollectionName: SWEETS_SUBCOLLECTION,
	docId: string
) {
	return handleFirestoreError(async () => {
	const subDoc = doc(getSubCollectionRef(sweetId, subCollectionName), docId);
	return await deleteDoc(subDoc);
});
}

export async function addToSubCollection(
	sweetId: string,
	subCollectionName: SWEETS_SUBCOLLECTION,
	uid: string
  ): Promise<void> {

	return handleFirestoreError(async () => {
	  const subCollectionRef = getSubCollectionRef(sweetId, subCollectionName);
	  await addDoc(subCollectionRef, { uid: uid });
	});
  }
  
  export async function isUserInSubCollection(
	sweetId: string,
	subCollectionName: SWEETS_SUBCOLLECTION,
	uid: string
  ): Promise<string | null> {
	return handleFirestoreError(async () => {
	  const subCollectionRef = getSubCollectionRef(sweetId, subCollectionName);
	  const q = query(subCollectionRef, where('uid', '==', uid));
	  const querySnapshot = await getDocs(q);
	  
	  if (!querySnapshot.empty) {
		return querySnapshot.docs[0].id;
	  }
	  
	  return null;
	});
  }

  export async function removeFromSubCollection(
	sweetId: string,
	subCollectionName: SWEETS_SUBCOLLECTION,
	uid: string
  ): Promise<void> {
	return handleFirestoreError(async () => {
	  const docId = await isUserInSubCollection(sweetId, subCollectionName, uid);
	  
	  if (docId) {
		await removeDao(sweetId, subCollectionName, docId);
	  } else {
		console.log(`No document found for uid: ${uid}`);
	  }
	});
  }


export async function checkUserInteractions(comments: SweetDetail[], uid: string): Promise<SweetDetail[]> {
	const checkInteractionsPromises = comments.map(async (comment): Promise<SweetDetail> => {
	  const [isLiked, isReSweeted, isCommented] = await Promise.all([
		isUserInSubCollection(comment.sweet.id ?? '', SWEETS_SUBCOLLECTION.LIKERS, uid),
		isUserInSubCollection(comment.sweet.id ?? '', SWEETS_SUBCOLLECTION.RETWEETERS, uid),
		isUserInSubCollection(comment.sweet.id ?? '', SWEETS_SUBCOLLECTION.COMMENTERS, uid),
	  ]);
  
	  return {
		...comment,
		isLiked: !!isLiked,
		isReSweeted: !!isReSweeted,
		isCommented: !!isCommented,
	  };
	});
  
	return Promise.all(checkInteractionsPromises);
  }