import { collection, deleteDoc, doc, getDocs, increment, setDoc, updateDoc } from 'firebase/firestore';
import { handleFirestoreError } from '../utils';
import { db } from '../firebase';

class UserProfileDAO {
	private USER_PROFILE_COLLECTION = collection(db, 'userProfile');

	async getFollowers(uid: string): Promise<string[]> {
		return handleFirestoreError(async () => {
			const followersColRef = collection(this.USER_PROFILE_COLLECTION, `${uid}/followers`);
			const snapshot = await getDocs(followersColRef);
			return snapshot.docs.map((doc) => doc.id);
		});
	}

	async getFollowing(uid: string): Promise<string[]> {
		return handleFirestoreError(async () => {
			const followingColRef = collection(this.USER_PROFILE_COLLECTION, `${uid}/following`);
			const snapshot = await getDocs(followingColRef);
			return snapshot.docs.map((doc) => doc.id);
		});
	}

	async removeFollowing(uid: string, userIdToRemove: string): Promise<void> {
		return handleFirestoreError(async () => {
			const followingDocRef = doc(
				this.USER_PROFILE_COLLECTION,
				`${uid}/following/${userIdToRemove}`
			);
			await deleteDoc(followingDocRef);
		});
	}

	async removeFollower(uid: string, userIdToRemove: string): Promise<void> {
		return handleFirestoreError(async () => {
			const followerDocRef = doc(
				this.USER_PROFILE_COLLECTION,
				`${uid}/followers/${userIdToRemove}`
			);
			await deleteDoc(followerDocRef);
		});
	}

	async addFollower(uid: string, followerId: string): Promise<void> {
		return handleFirestoreError(async () => {
			const followerDocRef = doc(this.USER_PROFILE_COLLECTION, `${uid}/followers/${followerId}`);
			await setDoc(followerDocRef, {
				/* data you want to set for follower, if any */
			});
		});
	}

	async addFollowing(uid: string, followingId: string): Promise<void> {
		return handleFirestoreError(async () => {
			const followingDocRef = doc(this.USER_PROFILE_COLLECTION, `${uid}/following/${followingId}`);
			await setDoc(followingDocRef, {
				/* data you want to set for following, if any */
			});
		});
	}

	async incrementFollowingCount(uid: string): Promise<void> {
		const tweetDoc = doc(this.USER_PROFILE_COLLECTION, uid);
		return await updateDoc(tweetDoc, { following: increment(+1) });
	}

	async incrementFollowersCount(uid: string): Promise<void> {
		const tweetDoc = doc(this.USER_PROFILE_COLLECTION, uid);
		return updateDoc(tweetDoc, { followers: increment(+1) });
	}

	async decrementFollowingCount(uid: string): Promise<void> {
		const tweetDoc = doc(this.USER_PROFILE_COLLECTION, uid);
		return await updateDoc(tweetDoc, { following: increment(-1) });
	}

	async decrementFollowersCount(uid: string): Promise<void> {
		const tweetDoc = doc(this.USER_PROFILE_COLLECTION, uid);
		return updateDoc(tweetDoc, { followers: increment(-1) });
	}
}

export const userProfileDAO = new UserProfileDAO();
