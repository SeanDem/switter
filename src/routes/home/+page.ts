import { getAllSweetDetail } from '$lib/services/sweet/sweet';
import { SweetType, type SweetDetail } from '$lib/types/types';

export const load = async () => {
	const sweetDetailList = await getAllSweetDetail({ sweetType: SweetType.SWEET });
	return { sweetDetailList };
};
