import { getAllSweetDetail } from '$lib/services/sweet/sweet';
import { SweetType } from '$lib/types/types';

export const load = async () => {
	const sweetDetailList = await getAllSweetDetail({ sweetType: SweetType.SWEET });
	return { sweetDetailList };
};
