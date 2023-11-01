import { createChatCompletion } from '$lib/server/openai'
import type { PageServerLoad } from './$types'

export const load = ( async ({ params }) => {
    const {problem} = params
    let arr = ["Spongebob", "Spiderman", "Pokemon", "Justice League"];
    const character = arr[(Math.floor(Math.random() * arr.length))]
    const reply = await createChatCompletion(problem, character)

    return {reply}
}) satisfies PageServerLoad

