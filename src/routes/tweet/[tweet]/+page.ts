import { getSweet } from '$lib/services/sweet/sweet.js';
import type { Sweet } from '$lib/types.js';

export const load = async ({ params }): Promise<Sweet> => {
	return await getSweet(params.tweet);
};
