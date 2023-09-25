import { collection, doc } from 'firebase/firestore';
import { db } from '$lib/firebase';

const userPrivateCollection = collection(db, 'userPrivate');

const userProfileCollection = collection(db, 'userProfile');

const tweetsCollection = collection(db, 'sweets');

const conversationsCollection = collection(db, 'conversations');

const likesCollection = collection(db, 'likes');

const commentsCollection = collection(db, 'comments');

export {
	tweetsCollection,
	conversationsCollection,
	userPrivateCollection,
	userProfileCollection,
	likesCollection,
	commentsCollection
};
