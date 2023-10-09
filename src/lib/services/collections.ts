import { collection, doc } from 'firebase/firestore';
import { db } from '$lib/firebase';

export const userPrivateCollection = collection(db, 'userPrivate');

export const userProfileCollection = collection(db, 'userProfile');

export const sweetsCollection = collection(db, 'sweets');

export const conversationsCollection = collection(db, 'conversations');

export const likesCollection = collection(db, 'likes');

