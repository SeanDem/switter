import {
	collection,
	deleteDoc,
	doc,
	type CollectionReference,
	type DocumentData,
	getDocs,
	query,
	where,
	getDoc,
	addDoc
} from 'firebase/firestore';
import { db } from '$lib/services/firebase';
import { sweetsCollection } from './collection';
import { handleFirestoreError } from '../utils';
import type { SWEETS_SUBCOLLECTION } from '$lib/types/types';

export const getSweetDoc = (sweetId: string) => doc(db, 'sweets', sweetId);
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