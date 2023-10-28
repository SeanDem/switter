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
	QuerySnapshot,
	setDoc,
	onSnapshot
} from 'firebase/firestore';
import type { Conversation, Message } from '$lib/types/types';
import { userAuth } from '$lib/store/store';
import { get } from 'svelte/store';
import { handleFirestoreError } from './utils';
import { db } from '$lib/services/firebase';

export const messagesCollection = collection(db, 'messages');
export const getMessageDoc = (messageId: string) => doc(db, 'messages', messageId);

export const getMessageSubCollection = (conversationId: string) =>
	collection(getMessageDoc(conversationId), 'messages');

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
	lastMessage: string
): Promise<void> => {
	return handleFirestoreError(async () => {
		const conversationRef = doc(messagesCollection, conversationId);
		await updateDoc(conversationRef, { lastMessage, timestamp: serverTimestamp() });
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

export const getConversationsForUser = async (userUid: string): Promise<Conversation[]> => {
	return handleFirestoreError(async () => {
		const q1 = query(messagesCollection, where('userId1', '==', userUid));
		const q2 = query(messagesCollection, where('userId2', '==', userUid));

		const [conversations1Snap, conversations2Snap] = await Promise.all([getDocs(q1), getDocs(q2)]);
		const conversations1 = conversations1Snap.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		})) as Message[];
		const conversations2 = conversations2Snap.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		})) as Message[];

		const conversations = conversations1.concat(conversations2);
		conversations.sort((a, b) => {
			if (a.timestamp && b.timestamp) {
				return (b.timestamp as Timestamp).seconds - (a.timestamp as Timestamp).seconds;
			}
			return 0;
		});
		return conversations;
	});
};

export const getMessagesByConversationId = async (conversationId: string): Promise<Message[]> => {
	return handleFirestoreError(async () => {
		const messagesSubCollection = getMessageSubCollection(conversationId);
		const q = query(messagesSubCollection, orderBy('timestamp', 'asc'));
		const snapshot = await getDocs(q);

		if (!snapshot.docs.length) return;
		return snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		})) as Message[];
	});
};
export const listenToMessagesByConversationId = (
	conversationId: string,
	onUpdate: (messages: Message[]) => void
): (() => void) => {
	const messagesSubCollection = getMessageSubCollection(conversationId);
	const q = query(messagesSubCollection, orderBy('timestamp', 'asc'));

	const unsubscribe = onSnapshot(q, (snapshot) => {
		const messages = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		})) as Message[];

		onUpdate(messages);
	});

	return unsubscribe;
};

function getIds(snap: QuerySnapshot): string[] {
	let idList: string[] = [];
	snap.forEach((doc) => idList.push(doc.id));
	return idList;
}

export async function addNewMessage(
	conversationId: string,
	message: Omit<Message, 'id' | 'timestamp'>
) {
	const newMessageRef = doc(getMessageSubCollection(conversationId));
	const fullMessage: Message = {
		...message,
		id: newMessageRef.id,
		timestamp: serverTimestamp()
	};
	await setDoc(newMessageRef, fullMessage);
	await updateLastMessage(conversationId, message.text);
	return fullMessage;
}
