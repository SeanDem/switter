import { userProfileCollection } from './../collections';
import { user } from '$lib/store/store';
import type { UserProfile, UserPublic } from '$lib/types';
import { get } from 'svelte/store';
import { getUserProfileByUid } from './profile';
import { isUserAuth } from '../utils';
import { updateEmail, updateProfile, type UserInfo } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export async function fetchCurrentUserProfileData(): Promise<UserProfile | null> {
	const currentUser = get(user);
	if (currentUser && currentUser.uid) {
		const userProfile = await getUserProfileByUid(currentUser.uid);
		if (userProfile) {
			console.log('userProfile', userProfile);
			return {
				...userProfile,
				displayName: currentUser.displayName,
				birthday: userProfile.birthday,
				bio: userProfile.bio,
				handle: userProfile.handle,
				phoneNumber: currentUser.phoneNumber,
				photoURL: currentUser.photoURL,
				providerId: currentUser.providerId,
				userUid: currentUser.uid,
				followersCount: userProfile.followersCount,
				followingCount: userProfile.followingCount
			} as UserProfile;
		}
	}
	return null;
}

export async function updateUserProfile(updatedData: UserProfile): Promise<void> {
	isUserAuth();
	await updateUserInfo(updatedData);
	await updateUserPublic(updatedData);
}
async function updateUserPublic(updatedData: UserPublic) {
	const currentUser = get(user);
	if (!currentUser) throw new Error('User not authenticated');
	const userPublic: UserPublic = {
		userUid: updatedData.userUid,
		userDisplayName: updatedData.userDisplayName,
		userProfileUrl: updatedData.userProfileUrl,
		handle: updatedData.handle,
		bio: updatedData.bio,
		birthday: updatedData.birthday
	};

	const userDocRef = doc(userProfileCollection, currentUser?.uid);
	await setDoc(userDocRef, userPublic, { merge: true });
}
export async function updateUserInfo(userInfo: UserInfo): Promise<void> {
	const currentUser = get(user);
	if (!currentUser) throw new Error('User not authenticated');
	try {
		if (userInfo.email) await updateEmail(currentUser, userInfo.email);
		//need to add phone number support
		if (userInfo.photoURL) await updateProfile(currentUser, { photoURL: userInfo.photoURL });
		if (userInfo.displayName)
			await updateProfile(currentUser, { displayName: userInfo.displayName });
	} catch (error) {
		console.error('Error updating user auth fields:', error);
	}
}
