import {
	collection,
	deleteDoc,
	doc,
	type CollectionReference,
	type DocumentData,
	getDocs,
	query,
	where,
	getDoc
} from 'firebase/firestore';
import { db } from '$lib/services/firebase';
import { sweetsCollection } from './collection';
import { SWEETS_SUBCOLLECTION } from '$lib/types/types';

export const getSweetDoc = (sweetId: string) => doc(db, 'sweets', sweetId);

export const getLikersSubCollection = (sweetId: string) =>
	collection(getSweetDoc(sweetId), SWEETS_SUBCOLLECTION.LIKERS);

export const getCommentersSubCollection = (sweetId: string) =>
	collection(getSweetDoc(sweetId), SWEETS_SUBCOLLECTION.COMMENTERS);

export const getRetweetersSubCollection = (sweetId: string) =>
	collection(getSweetDoc(sweetId), SWEETS_SUBCOLLECTION.RETWEETERS);
	
function getSubCollectionRef(
	sweetId: string,
	subCollectionName: SWEETS_SUBCOLLECTION
): CollectionReference<DocumentData> {
	const sweetDocInstance = doc(sweetsCollection, sweetId);
	return collection(sweetDocInstance, subCollectionName);
}

export async function removeFromSubCollection(
	sweetId: string,
	subCollectionName: SWEETS_SUBCOLLECTION
) {
	const subDoc = doc(getSubCollectionRef(sweetId, subCollectionName), sweetId);
	return await deleteDoc(subDoc);
}
// export async function getDocumentFromSubCollection(
// 	sweetId: string,
// 	subCollectionName: SUBCOLLECTION_NAMES
// ): Promise<DocumentData> {
// 	const subDocRef = doc(getSubCollectionRef(sweetId, subCollectionName), sweetId);
// 	const docSnapshot = await getDoc(subDocRef);

// 	if (docSnapshot.exists()) {
// 		return docSnapshot.data();
// }

export async function isUserInSubCollection(
	sweetId: string,
	subCollectionName: SWEETS_SUBCOLLECTION,
	userId: string
): Promise<boolean> {
	const subCollectionRef = getSubCollectionRef(sweetId, subCollectionName);

	const q = query(subCollectionRef, where('userId', '==', userId));
	const querySnapshot = await getDocs(q);

	return !querySnapshot.empty;
}
