import { doc, getDocs } from '@firebase/firestore';
import type { UserProf } from '$lib/types/types';
import { handleFirestoreError } from '../utils';
import { collection, getDoc, query } from 'firebase/firestore';
import type { User } from 'firebase/auth';
import { db } from '$lib/services/firebase';

export const userProfileCollection = collection(db, 'userProfile');

export async function getUserProfileByUid(userUid: string): Promise<UserProf> {
	return handleFirestoreError(async () => {
		const userDocRef = doc(userProfileCollection, userUid);
		const userDoc = await getDoc(userDocRef);
		return userDoc.data();
	});
}

export async function getUserPublic(authUser: User): Promise<UserProf> {
	const userDocRef = doc(userProfileCollection, authUser?.uid);
	const userDoc = await getDoc(userDocRef);
	return userDoc.data() as UserProf;
}

export async function fetchAllUsers(): Promise<UserProf[]> {
	const users: UserProf[] = [];
	const q = query(userProfileCollection);
	const usersSnapshot = await getDocs(q);

	usersSnapshot.forEach((doc) => {
		users.push(doc.data() as UserProf);
	});

	return users;
}
