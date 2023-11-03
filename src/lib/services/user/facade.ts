import { userAuthStore, userProfileStore } from '$lib/store/store';
import type { UserProf } from '$lib/types/types';
import { doc, setDoc } from 'firebase/firestore';
import { get } from 'svelte/store';
import { getUserProfileByUid, userProfileCollection } from './profile';

export async function getCurrentUserProfile(uid: string): Promise<UserProf> {
	return await getUserProfileByUid(uid);
}

export async function updateUserProfile(updatedData: UserProf): Promise<void> {
	const currentUser = get(userAuthStore);
	if (!currentUser) throw new Error('User not authenticated');
	
	const userPublic: UserProf = {
		uid: currentUser.uid,
		displayName: updatedData.displayName ?? '',
		profileUrl: updatedData.profileUrl ?? '',
		handle: updatedData.handle,
		bio: updatedData.bio ?? '',
		birthday: updatedData.birthday ?? '',
		followersCount: 0,
		followingCount: 0,
		email: ''
	};

	const userDocRef = doc(userProfileCollection, currentUser?.uid);
	await setDoc(userDocRef, userPublic, { merge: true });
}
