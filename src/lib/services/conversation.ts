import {
	collection,
	doc,
	addDoc,
	getDoc,
	updateDoc,
	deleteDoc,
	query,
	where,
	getDocs,
    Timestamp
} from 'firebase/firestore';
import { db } from '$lib/firebase';
import type { Conversation } from '$lib/types';

const conversationsCollection = collection(db, 'conversations');

// Create
export const createConversation = async (
	conversation: Omit<Conversation, 'id'>
): Promise<string> => {
	const conversationRef = await addDoc(conversationsCollection, conversation);
	return conversationRef.id;
};

// Read
export const getConversation = async (conversationId: string): Promise<Conversation | null> => {
	const conversationRef = doc(conversationsCollection, conversationId);
	const conversationSnap = await getDoc(conversationRef);
	return conversationSnap.exists() ? (conversationSnap.data() as Conversation) : null;
};

// Update
export const updateLastMessage = async (
	conversationId: string,
	lastMessage: string,
	lastTimestamp: Timestamp
): Promise<void> => {
	const conversationRef = doc(conversationsCollection, conversationId);
	await updateDoc(conversationRef, { lastMessage, lastTimestamp });
};

// Delete
export const deleteConversation = async (conversationId: string): Promise<void> => {
	const conversationRef = doc(conversationsCollection, conversationId);
	await deleteDoc(conversationRef);
};

// Fetch all conversations involving a specific user
export const getConversationsForUser = async (userId: string): Promise<Conversation[]> => {
	const q1 = query(conversationsCollection, where('userId1', '==', userId));
	const q2 = query(conversationsCollection, where('userId2', '==', userId));

	const [conversations1Snap, conversations2Snap] = await Promise.all([getDocs(q1), getDocs(q2)]);

	const conversations1 = conversations1Snap.docs.map((doc) => doc.data() as Conversation);
	const conversations2 = conversations2Snap.docs.map((doc) => doc.data() as Conversation);

	return [...conversations1, ...conversations2];
};
