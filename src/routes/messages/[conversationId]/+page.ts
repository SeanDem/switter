import {
	getConversationById,
	getConversationsForUser,
	getMessagesByConversationId
} from '$lib/services/messages';
import { getUserProfileByUid } from '$lib/services/user/profile.js';
import { userAuth } from '$lib/store/store';
import type { Message, UserProfile } from '$lib/types';
import { serverTimestamp } from 'firebase/firestore';
import { get } from 'svelte/store';

export interface LoadType {
	messageList: Message[];
	otherUserProfile: UserProfile;
}

export const load = async ({ params }): Promise<LoadType> => {
	const userUid = get(userAuth)?.uid;
	const conversation = await getConversationById(params.conversationId);
	const otherUserUid =
		conversation.userId1 !== userUid ? conversation.userId1 : conversation.userId2;
	const otherUserProfile = await getUserProfileByUid(otherUserUid);
	const messageList = await getMessagesByConversationId(params.conversationId);

	return { messageList, otherUserProfile };
};
