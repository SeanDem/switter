import { getConversationsForUser } from '$lib/services/messages';
import type { Conversation } from '$lib/types';

export const load = async (): Promise<{ conversationList: Conversation[] }> => {
	let conversationList = await getConversationsForUser();
	console.log(conversationList);
	return { conversationList };
};
