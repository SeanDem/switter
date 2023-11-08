import type { increment } from 'firebase/firestore';
import { userProfileDAO } from './userProfileDao';

export async function getFollowers(uid: string): Promise<string[]> {
	return userProfileDAO.getFollowers(uid);
}

export async function getFollowing(uid: string): Promise<string[]> {
	return userProfileDAO.getFollowing(uid);
}

export async function removeFollowing(uid: string, userIdToRemove: string): Promise<void> {
	return userProfileDAO.removeFollowing(uid, userIdToRemove);
}

export async function removeFollower(uid: string, userIdToRemove: string): Promise<void> {
	return userProfileDAO.removeFollower(uid, userIdToRemove);
}

export async function addFollower(uid: string, followerId: string): Promise<void> {
	return userProfileDAO.addFollower(uid, followerId);
}

export async function addFollowing(uid: string, followingId: string): Promise<void> {
	return userProfileDAO.addFollowing(uid, followingId);
}

export async function addFollowerAndFollowing(uid: string, otherUserUid: string): Promise<void> {
	Promise.all([addFollower(uid, otherUserUid), addFollowing(otherUserUid, uid)]);
}

export async function incrementFollowingCount(uid: string): Promise<void> {
	return userProfileDAO.incrementFollowingCount(uid);
}

export async function incrementFollowersCount(uid: string): Promise<void> {
	return userProfileDAO.incrementFollowingCount(uid);
}

export async function follow(uid: string, otherUserUid: string) {
	await addFollowerAndFollowing(uid, otherUserUid);
	incrementFollowingCount(uid);
	incrementFollowersCount(otherUserUid);
}
