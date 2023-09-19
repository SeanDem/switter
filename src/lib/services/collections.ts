import { collection, doc } from 'firebase/firestore';
import { db } from '$lib/firebase';

const userPrivateCollection = collection(db, 'userPrivate');

const userProfileCollection = collection(db, 'userProfile');

const tweetsCollection = collection(db, 'sweets');

const conversationsCollection = collection(db, 'conversations');

const getCommentsSubCollection = (tweetId: string) => {
	return collection(doc(tweetsCollection, tweetId), 'comments');
};

const getLikesSubCollection = (tweetId: string) => {
	return collection(doc(tweetsCollection, tweetId), 'likes');
};

export {
	tweetsCollection,
	conversationsCollection,
	userPrivateCollection,
	userProfileCollection,
	getCommentsSubCollection,
	getLikesSubCollection
};
