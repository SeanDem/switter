import { checkUserInteractions } from '$lib/services/sweet/sub-collections';
import { getSweetDetail, getAllSweetDetail } from '$lib/services/sweet/sweet';
import { SweetType } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export const load = async ({ params, cookies }) => {
	const uid = cookies.get('uid');
	if (!uid) throw error(401, 'User not authenticated');

	let [sweetDetail, comments] = await Promise.all([
		getSweetDetail(params.sweet),
		getAllSweetDetail({
			sweetType: SweetType.COMMENT,
			refSweetId: params.sweet
		})
	]);

	const sweetDetailList = await checkUserInteractions([sweetDetail], uid);
	sweetDetail = sweetDetailList[0];
	sweetDetail.comments = await checkUserInteractions(comments, uid);

	return { sweetDetail };
};
export const ssr = false;
