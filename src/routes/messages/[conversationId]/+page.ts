import {
	getConversationById,
	getConversationsForUser,
	getMessagesByConversationId
} from '$lib/services/messages';
import { getUserProfileByUid } from '$lib/services/user/profile.js';
import { userAuth } from '$lib/store/store';
import type { Message, UserProfile } from '$lib/types/types';
import { get } from 'svelte/store';

// export const load = async ({ params }) => {
// 	// const conversation = await getConversationById(params.conversationId);
// 	// const otherUserUid =
// 	// 	conversation.userId1 !== userUid ? conversation.userId1 : conversation.userId2;
// 	// const otherUserProfile = await getUserProfileByUid(otherUserUid);
// 	// const messageList = await getMessagesByConversationId(params.conversationId);
// 	// if (!messageList || !otherUserProfile) throw new Error('No messages found');
// 	return { conversationId: params.conversationId };
// };
