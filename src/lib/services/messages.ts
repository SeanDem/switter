import {
	doc,
	addDoc,
	getDoc,
	updateDoc,
	deleteDoc,
	query,
	where,
	getDocs,
	Timestamp,
	collection,
	serverTimestamp,
	orderBy,
	QuerySnapshot
} from 'firebase/firestore';
import type { Conversation, Message } from '$lib/types';
import { userAuth } from '$lib/store/store';
import { get } from 'svelte/store';
import { getMessageSubCollection, messagesCollection } from './collections';
import { handleFirestoreError } from './utils';

export const getOrCreateConversationIdByUserID = async (userUid: string): Promise<string> => {
	return handleFirestoreError(async () => {
		const currentUserUid = get(userAuth)?.uid;

		const q1 = query(
			messagesCollection,
			where('userId1', '==', currentUserUid),
			where('userId2', '==', userUid)
		);
		const q2 = query(
			messagesCollection,
			where('userId2', '==', userUid),
			where('userId1', '==', currentUserUid)
		);
		const [snap1, snap2] = await Promise.all([getDocs(q1), getDocs(q2)]);
		const idList: string[] = [...getIds(snap1), ...getIds(snap2)];

		if (idList.length) {
			return idList[0];
		}
		const conversation: Conversation = {
			userId1: currentUserUid ?? '',
			userId2: userUid,
			lastMessage: 'new convo temp',
			lastTimestamp: serverTimestamp()
		};
		const conversationRef = await addDoc(messagesCollection, conversation);
		return conversationRef.id;
	});
};

export const getConversationById = async (conversationId: string): Promise<Conversation> => {
	return handleFirestoreError(async () => {
		const conversationRef = doc(messagesCollection, conversationId);
		const conversationSnap = await getDoc(conversationRef);
		if (!conversationSnap.exists()) {
			return null;
		}
		return { id: conversationSnap.id, ...conversationSnap.data() } as Conversation;
	});
};

export const updateLastMessage = async (
	conversationId: string,
	lastMessage: string,
	lastTimestamp: Timestamp
): Promise<void> => {
	return handleFirestoreError(async () => {
		const conversationRef = doc(messagesCollection, conversationId);
		await updateDoc(conversationRef, { lastMessage, lastTimestamp });
	});
};

export const deleteConversation = async (conversationId: string): Promise<void> => {
	return handleFirestoreError(async () => {
		const messagesRef = collection(messagesCollection, conversationId, 'messages');
		const messagesSnapshot = await getDocs(messagesRef);

		const deleteMessagesPromises = messagesSnapshot.docs.map((messageDoc) =>
			deleteDoc(messageDoc.ref)
		);
		await Promise.all(deleteMessagesPromises);

		const conversationRef = doc(messagesCollection, conversationId);
		await deleteDoc(conversationRef);
	});
};

export const getConversationsForUser = async (): Promise<Conversation[]> => {
	return handleFirestoreError(async () => {
		const userUid = get(userAuth)?.uid;
		const q1 = query(messagesCollection, where('userId1', '==', userUid));
		const q2 = query(messagesCollection, where('userId2', '==', userUid));

		const [conversations1Snap, conversations2Snap] = await Promise.all([getDocs(q1), getDocs(q2)]);
		const conversations1 = conversations1Snap.docs.map((doc) => doc.data() as Conversation);
		const conversations2 = conversations2Snap.docs.map((doc) => doc.data() as Conversation);

		return [...conversations1, ...conversations2];
	});
};

export const getMessagesByConversationId = async (conversationId: string): Promise<Message[]> => {
	return handleFirestoreError(async () => {
		const messagesSubCollection = getMessageSubCollection(conversationId);
		const q = query(messagesCollection, orderBy('timestamp', 'desc'));
		const snapshot = await getDocs(q);

		if (!snapshot.docs.length) return;
		return snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		})) as Message[];
	});
};

function getIds(snap: QuerySnapshot): string[] {
	let idList: string[] = [];
	snap.forEach((doc) => idList.push(doc.id));
	return idList;
}
