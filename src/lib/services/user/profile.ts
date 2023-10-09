import { doc, getDocs, setDoc } from '@firebase/firestore';
import type { Sweet, SweetDetail, UserProfile } from '$lib/types';
import { userProfileCollection } from '../collections';
import { isUserAuth, handleFirestoreError, queryByUID } from '../utils';
import { userAuth } from '$lib/store/store';
import { get } from 'svelte/store';
import { Firestore, getDoc, query, where } from 'firebase/firestore';
import type { User } from 'firebase/auth';

export async function createOrUpdateUserProfile(userProfile: UserProfile): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		if (!userProfile.userUid) throw new Error('Missing UID in user profile');
		const userDocRef = doc(userProfileCollection, userProfile.userUid);
		await setDoc(userDocRef, userProfile, { merge: true });
	});
}

export async function getUserProfileByUid(userUid: string): Promise<UserProfile> {
	return handleFirestoreError(async () => {
		const userDocRef = doc(userProfileCollection, userUid);
		const userDoc = await getDoc(userDocRef);
		return userDoc.data();
	});
}

export async function checkUserProfileExists(userUid: string): Promise<boolean> {
	return handleFirestoreError(async () => {
		const userSnapshot = await getDocs(queryByUID(userProfileCollection, userUid));
		return !userSnapshot.empty;
	});
}
export async function getUserPublic(authUser: User): Promise<UserProfile> {
	const userDocRef = doc(userProfileCollection, authUser?.uid);
	const userDoc = await getDoc(userDocRef);
	return userDoc.data() as UserProfile;
}

export async function fetchUsersByUids(
	userUids: string[]
): Promise<{ [key: string]: UserProfile }> {
	const users: { [key: string]: UserProfile } = {};
	const batchSize = 10;

	for (let i = 0; i < userUids.length; i += batchSize) {
		const userUidsBatch = userUids.slice(i, i + batchSize);
		const q = query(userProfileCollection, where('userUid', 'in', userUidsBatch));
		const usersSnapshot = await getDocs(q);
		usersSnapshot.forEach((doc) => {
			users[doc.id] = doc.data() as UserProfile;
		});
	}

	return users;
}
