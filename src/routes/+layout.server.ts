import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) return {loggedIn: false}
	return {
		loggedIn: true,
		userId: session.user.userId,
		username: session.user.username
	};
};
