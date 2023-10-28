import { userProfile$ } from './../../store/store';
import { serverTimestamp } from '@firebase/firestore';
import {
	addDoc,
	getDoc,
	updateDoc,
	deleteDoc,
	doc,
	getDocs,
	query,
	orderBy,
	where
} from 'firebase/firestore';
import { isUserAuth, handleFirestoreError } from '../utils';
import { SweetType, type Sweet, type SweetDetail, type UserProfile } from '$lib/types/types';
import { get } from 'svelte/store';
import { sweetsCollection } from './collection';
import { userProfileCollection } from '../user/profile';

export type SweetOptions = {
	sweetType: SweetType;
	refSweetId?: string;
	userUid?: string;
};

export async function getSweet(tweetId: string): Promise<Sweet> {
	return handleFirestoreError(async () => {
		const tweetDoc = doc(sweetsCollection, tweetId);
		const tweetSnapshot = await getDoc(tweetDoc);
		return {
			id: tweetSnapshot.id,
			...tweetSnapshot.data()
		};
	});
}

export async function getSweetDetail(sweetId: string): Promise<SweetDetail> {
	return handleFirestoreError(async () => {
		const sweet = await getSweet(sweetId);
		if (!sweet) return null;

		const q = query(userProfileCollection, where('userUid', '==', sweet.userUid));
		const usersSnapshot = await getDocs(q);

		let user: UserProfile | null = null;
		usersSnapshot.forEach((doc) => {
			user = doc.data() as UserProfile;
		});

		return { sweet, user };
	});
}

export async function updateTweetById(tweetId: string, updatedTweet: Sweet): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const tweetDoc = doc(sweetsCollection, tweetId);
		await updateDoc(tweetDoc, { updatedTweet });
	});
}

export async function deleteTweetById(tweetId: string): Promise<void> {
	return handleFirestoreError(async () => {
		isUserAuth();
		const tweetDoc = doc(sweetsCollection, tweetId);
		await deleteDoc(tweetDoc);
	});
}

export async function getAllSweetDetail(options: SweetOptions): Promise<SweetDetail[]> {
	return handleFirestoreError(async () => {
		const sweets = await getSweetList(options);
		const userUids = [...new Set(sweets.map((sweet) => sweet.userUid))];
		if (userUids.length === 0) return [];

		const users = await fetchUsersByUids(userUids);

		return sweets
			.map((sweet) => {
				const user = users[sweet.userUid];
				return user ? { sweet, user } : null;
			})
			.filter(Boolean);
	});
}

async function fetchUsersByUids(userUids: string[]): Promise<{ [key: string]: UserProfile }> {
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

export async function getSweetList(options: SweetOptions): Promise<Sweet[]> {
	return handleFirestoreError(async () => {
		let q = query(sweetsCollection);

		if (options.sweetType) {
			q = query(q, where('type', '==', options.sweetType));
		}

		if (options.refSweetId) {
			q = query(q, where('refSweetId', '==', options.refSweetId));
		}

		if (options.userUid) {
			q = query(q, where('userUid', '==', options.userUid));
		}

		q = query(q, orderBy('timestamp', 'desc'));

		const snapshot = await getDocs(q);
		return snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));
	});
}

export async function createSweet(options: SweetOptions, text: string): Promise<string> {
	const currentUser = get(userProfile$);
	if (!currentUser) throw new Error('User not authenticated');

	let sweet: Sweet = {
		text,
		type: options.sweetType,
		userUid: currentUser.userUid,
		timestamp: serverTimestamp(),
		likesCount: 0,
		commentsCount: 0,
		retweetsCount: 0
	};

	if (options.sweetType === SweetType.COMMENT) {
		if (!options.refSweetId) throw new Error('Reference Sweet ID is required for comments');
		sweet.refSweetId = options.refSweetId;
	}

	if (options.userUid) {
		sweet.userUid = options.userUid;
	}

	return handleFirestoreError(async () => {
		const docRef = await addDoc(sweetsCollection, sweet);
		return docRef.id;
	});
}
