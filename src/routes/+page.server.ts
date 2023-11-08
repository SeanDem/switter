import { checkUserInteractions } from '$lib/services/sweet/sub-collections';
import { getAllSweetDetail } from '$lib/services/sweet/sweet';
import { SweetType } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const uid = cookies.get('uid');
	console.log('uid', uid);
	if (!uid) throw error(401, 'User not authenticated');
	const sweetDetailList = await getAllSweetDetail({ sweetType: SweetType.SWEET });
	Object.assign(sweetDetailList, await checkUserInteractions(sweetDetailList, uid));

	return { sweetDetailList };
};
