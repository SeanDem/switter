import { query } from '@firebase/firestore';
import { addDoc, collection, doc, getDocs, setDoc, where } from 'firebase/firestore';
import { auth, db } from '$lib/firebase';
import type { UserPrivate } from '$lib/types';
import { userPrivateCollection } from '../collections';

export async function addUserPrivate(userInfo: UserPrivate): Promise<void> {
	if (!auth.currentUser) return;
	await addDoc(userPrivateCollection, {
		...userInfo
	});
}
export async function upsertUserPrivate(userInfo: UserPrivate): Promise<void> {
	if (!auth.currentUser || !userInfo.uid) return;
	const userDocRef = doc(userPrivateCollection, userInfo.uid);
	await setDoc(userDocRef, { ...userInfo }, { merge: true });
}

export async function getUserPrivate(uid: string): Promise<UserPrivate | null | void> {
	if (!auth.currentUser) return;
	const q = query(userPrivateCollection, where('uid', '==', uid));
	const userInfoSnapshot = await getDocs(q);

	if (!userInfoSnapshot.empty) {
		const docData = userInfoSnapshot.docs[0].data();
		const userInfo: UserPrivate = {
			uid: docData.uid,
			settings: docData.settings
		};
		return userInfo;
	}

	return null;
}
export async function userPrivateExists(uid: string): Promise<boolean | void> {
	if (!auth.currentUser) return;
	const q = query(userPrivateCollection, where('uid', '==', uid));
	const userSnapshot = await getDocs(q);
	return !userSnapshot.empty;
}
