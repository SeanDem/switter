import { getAllSweetDetail, getSweetDetail } from '$lib/services/sweet/sweet';
import { SweetType, type SweetDetail } from '$lib/types.js';

export const load = async ({ params }): Promise<SweetDetail> => {
	const [comments, sweetDetail] = await Promise.all([
		getAllSweetDetail({ sweetType: SweetType.COMMENT, refSweetId: params.sweet }),
		getSweetDetail(params.sweet)
	]);
	return {
		...sweetDetail,
		comments
	};
};
