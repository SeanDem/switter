import { SweetType, type Sweet, type SweetDetail, type UserProfile } from '$lib/types/types';
import { serverTimestamp } from '@firebase/firestore';
import {
	Query,
	addDoc,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	updateDoc,
	where
} from 'firebase/firestore';
import { get } from 'svelte/store';
import { userProfileCollection } from '../user/profile';
import { handleFirestoreError, isUserAuth } from '../utils';
import { userProfileStore } from './../../store/store';
import { sweetsCollection } from './collection';

export type SweetOptions = {
	sweetType: SweetType;
	refSweetId?: string;
	userUid?: string;
};

export async function getSweetById(sweetId: string): Promise<Sweet> {
	return handleFirestoreError(async () => {
		const tweetDoc = doc(sweetsCollection, sweetId);
		const tweetSnapshot = await getDoc(tweetDoc);
		return {
			id: tweetSnapshot.id,
			...tweetSnapshot.data()
		};
	});
}

export async function getSweetDetail(sweetId: string): Promise<SweetDetail> {
	return handleFirestoreError(async () => {
		const sweet = await getSweetById(sweetId);
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

export async function deleteSweetById(tweetId: string): Promise<void> {
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

export async function createSweet(options: SweetOptions, text: string): Promise<string> {
	const currentUser = get(userProfileStore);
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

function buildSweetQuery(options: SweetOptions): Query {
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

	return query(q, orderBy('timestamp', 'desc'));
}

export async function getSweetList(options: SweetOptions): Promise<Sweet[]> {
	return handleFirestoreError(async () => {
		const q = buildSweetQuery(options);
		const snapshot = await getDocs(q);
		return snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));
	});
}

export async function getSweet(options: SweetOptions): Promise<Sweet | null> {
	return handleFirestoreError(async () => {
		let q = buildSweetQuery(options);
		q = query(q, limit(1));

		const snapshot = await getDocs(q);
		const docs = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));

		return docs.length ? docs[0] : null;
	});
}
export async function getAndDeleteSweet(options: SweetOptions): Promise<void> {
	return handleFirestoreError(async () => {
		const sweet = await getSweet(options);
		if (sweet && sweet.id) {
			await deleteSweetById(sweet.id);
		} else {
			throw new Error('No Sweet document found to delete');
		}
	});
}
