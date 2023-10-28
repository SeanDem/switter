import { getAllSweetDetail, getSweetDetail } from '$lib/services/sweet/sweet';
import { SweetType, type SweetDetail } from '$lib/types/types.js';

export const load = async ({ params }) => {
	const comments = await getAllSweetDetail({
		sweetType: SweetType.COMMENT,
		refSweetId: params.sweet
	});
	const sweetDetail = await getSweetDetail(params.sweet);
	return {
		...sweetDetail,
		comments
	};
};
