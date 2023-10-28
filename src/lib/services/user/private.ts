import { query, addDoc, doc, getDocs, setDoc } from '@firebase/firestore';
import type { UserPrivate } from '$lib/types/types';
import { isUserAuth, handleFirestoreError, queryByUID } from '../utils';
import { db } from '$lib/services/firebase';
import { collection } from 'firebase/firestore';

export const userPrivateCollection = collection(db, 'userPrivate');

export async function addUserPrivate(userInfo: UserPrivate): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		await addDoc(userPrivateCollection, userInfo);
	});
}

export async function upsertUserPrivate(userInfo: UserPrivate): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		if (!userInfo.userUid) throw new Error('Missing UID in user info');
		const userDocRef = doc(userPrivateCollection, userInfo.userUid);
		await setDoc(userDocRef, userInfo, { merge: true });
	});
}

export async function getUserPrivate(uid: string): Promise<UserPrivate | null> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const userInfoSnapshot = await getDocs(queryByUID(userPrivateCollection, uid));
		if (!userInfoSnapshot.empty) return userInfoSnapshot.docs[0].data() as UserPrivate;
		return null;
	});
}

export async function isUserPrivateExist(uid: string): Promise<boolean> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const userSnapshot = await getDocs(queryByUID(userPrivateCollection, uid));
		return !userSnapshot.empty;
	});
}
