import { collection, doc } from 'firebase/firestore';
import { db } from '$lib/firebase';

export enum SWEETS_SUBCOLLECTION {
	LIKERS = 'likers',
	COMMENTERS = 'commenters',
	RETWEETERS = 'resweeters'
}

export const userPrivateCollection = collection(db, 'userPrivate');

export const userProfileCollection = collection(db, 'userProfile');

export const sweetsCollection = collection(db, 'sweets');

export const getSweetDoc = (sweetId: string) => doc(db, 'sweets', sweetId);

export const getLikersSubCollection = (sweetId: string) =>
	collection(getSweetDoc(sweetId), SWEETS_SUBCOLLECTION.LIKERS);
export const getCommentersSubCollection = (sweetId: string) =>
	collection(getSweetDoc(sweetId), SWEETS_SUBCOLLECTION.COMMENTERS);
export const getRetweetersSubCollection = (sweetId: string) =>
	collection(getSweetDoc(sweetId), SWEETS_SUBCOLLECTION.RETWEETERS);

export const messagesCollection = collection(db, 'conversations');

export const getMessageDoc = (messageId: string) => doc(db, 'messages', messageId);

export const getMessageSubCollection = (messageId: string) =>
	collection(getMessageDoc(messageId), 'messages');
