import { doc, getDocs } from '@firebase/firestore';
import type { UserProfile } from '$lib/types/types';
import { handleFirestoreError } from '../utils';
import { collection, getDoc, query } from 'firebase/firestore';
import type { User } from 'firebase/auth';
import { db } from '$lib/services/firebase';

export const userProfileCollection = collection(db, 'userProfile');

export async function getUserProfileByUid(userUid: string): Promise<UserProfile> {
	return handleFirestoreError(async () => {
		const userDocRef = doc(userProfileCollection, userUid);
		const userDoc = await getDoc(userDocRef);
		return userDoc.data();
	});
}

export async function getUserPublic(authUser: User): Promise<UserProfile> {
	const userDocRef = doc(userProfileCollection, authUser?.uid);
	const userDoc = await getDoc(userDocRef);
	return userDoc.data() as UserProfile;
}

export async function fetchAllUsers(): Promise<UserProfile[]> {
	const users: UserProfile[] = [];
	const q = query(userProfileCollection);
	const usersSnapshot = await getDocs(q);

	usersSnapshot.forEach((doc) => {
		users.push(doc.data() as UserProfile);
	});

	return users;
}
