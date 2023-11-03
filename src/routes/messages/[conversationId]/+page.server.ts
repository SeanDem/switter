import {
	getConversationById
} from '$lib/services/messages';
import { getUserProfileByUid } from '$lib/services/user/profile.js';

export const load = async ({ params, cookies }) => {
	const uid = cookies.get('uid') ?? '';
	let conversation = await getConversationById(params.conversationId);
	const otherUserUid =
		conversation.userId1 !== uid
			? conversation.userId1
			: conversation.userId2;
	const otherUserProf= await getUserProfileByUid(otherUserUid);

	return { otherUserProf }
};
