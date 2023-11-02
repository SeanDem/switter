import { getConversationsForUser } from "$lib/services/messages";

export const load = async ({ cookies }) => {
	const userUid = cookies.get("userUid") ?? '';
	const conversationList = await getConversationsForUser(userUid);
	return { conversationList}
};
