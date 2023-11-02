import {
	getConversationById
} from '$lib/services/messages';
import { getUserProfileByUid } from '$lib/services/user/profile.js';

export const load = async ({ params, cookies }) => {
	const userUid = cookies.get('userUid') ?? '';
	const conversation = await getConversationById(params.conversationId);
	const otherUserUid =
		conversation.userId1 !== userUid
			? conversation.userId1
			: conversation.userId2;
	const otherUserProfile = await getUserProfileByUid(otherUserUid);
	return { otherUserProfile }
};
