import { createChatCompletion } from '$lib/server/openai'
import type { PageServerLoad } from './$types'

export const load = ( async ({ params }) => {
    const {problem} = params
    const reply = await createChatCompletion(problem)

    return {reply}
}) satisfies PageServerLoad