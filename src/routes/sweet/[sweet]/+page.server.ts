import { checkUserInteractions } from '$lib/services/sweet/sub-collections';
import { getSweetDetail, getAllSweetDetail } from '$lib/services/sweet/sweet';
import { SweetType } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export const load = async ({ params, cookies }) => {
	const uid = cookies.get('uid');
	if (!uid) throw error(401, 'User not authenticated');

	const [sweetDetail, comments] = await Promise.all([
		getSweetDetail(params.sweet),
		getAllSweetDetail({
			sweetType: SweetType.COMMENT,
			refSweetId: params.sweet
		})
	]);

	sweetDetail.comments = await checkUserInteractions(comments, uid);
	Object.assign(sweetDetail, await checkUserInteractions([sweetDetail], uid));

	return { sweetDetail };
};
