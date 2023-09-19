import { doc, getDocs, setDoc } from '@firebase/firestore';
import type { UserPublic } from '$lib/types';
import { userProfileCollection } from '../collections';
import { isUserAuth, handleFirestoreError, queryByUID } from '../utils';
import { user } from '$lib/store/store';
import { get } from 'svelte/store';
import { getDoc } from 'firebase/firestore';

export async function createOrUpdateUserProfile(userProfile: UserPublic): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		if (!userProfile.userUid) throw new Error('Missing UID in user profile');
		const userDocRef = doc(userProfileCollection, userProfile.userUid);
		await setDoc(userDocRef, userProfile, { merge: true });
	});
}

export async function getUserProfileByUid(uid: string): Promise<UserPublic | null> {
	return handleFirestoreError(async () => {
		const userDocRef = doc(userProfileCollection, uid);
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
