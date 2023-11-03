import { getConversationsForUser } from "$lib/services/messages";
import { mapToSerializableTimestamp } from "$lib/utils/data";
import type { Timestamp } from "firebase/firestore";

export const load = async ({ cookies }) => {
	const uid = cookies.get("uid") ?? '';
	let conversationList = await getConversationsForUser(uid);
	conversationList = mapToSerializableTimestamp(conversationList, conversation => ({
		property: 'lastTimestamp',
		value: conversation.lastTimestamp as Timestamp
	}));	
	return { conversationList}
};
