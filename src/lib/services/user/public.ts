import { query } from '@firebase/firestore';
import { addDoc, collection, doc, getDocs, setDoc, where } from 'firebase/firestore';
import { auth, db } from '$lib/firebase';
import type { UserProfile } from '$lib/types';
import { userProfileCollection } from '../collections';

export async function addUserProfile(userProfile: UserProfile): Promise<void> {
	if (!auth.currentUser) return;
	await addDoc(userProfileCollection, {
		...userProfile
	}).then((res) => console.log({ res }));
}
export async function upsertUserProfile(userProfile: UserProfile): Promise<void> {
	if (!auth.currentUser || !userProfile.uid) return;
	const userDocRef = doc(userProfileCollection, userProfile.uid);
	await setDoc(userDocRef, { ...userProfile }, { merge: true });
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
	const q = query(userProfileCollection, where('uid', '==', uid));
	const userProfileSnapshot = await getDocs(q);

	if (!userProfileSnapshot.empty) {
		const docData = userProfileSnapshot.docs[0].data();
		const userProfile: UserProfile = {
			uid: docData.uid,
			handle: docData.handle,
			birthday: docData.birthday,
			phoneNumber: docData.phoneNumber,
			profilePicture: docData.profilePicture,
			bio: '',
			followersCount: 0,
			followingCount: 0
		};
		return userProfile;
	}

	return null;
}
export async function userProfileExists(uid: string): Promise<boolean> {
	const q = query(userProfileCollection, where('uid', '==', uid));
	const userSnapshot = await getDocs(q);
	return !userSnapshot.empty;
}
