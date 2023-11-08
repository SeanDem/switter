import { fetchAllUsers } from '$lib/services/user/profile';

export const load = async () => {
	const users = await fetchAllUsers();
	return { users };
};
