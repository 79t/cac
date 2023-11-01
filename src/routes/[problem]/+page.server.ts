import { createChatCompletion } from '$lib/server/openai'
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'
import { PrismaClient } from '@prisma/client'

export const load = ( async ({ params, locals }) => {
    // const prisma = new PrismaClient();
    const session = await locals.auth.validate()
    if (!session) throw redirect(302, '/login')

    const {problem} = params
    // let arr = ["Spongebob", "Spiderman", "Pokemon", "Justice League"];
    console.log('characters='+session.user.characters)
    let arr = session.user.characters
    const character = arr[(Math.floor(Math.random() * arr.length))]
    const reply = await createChatCompletion(problem, character)

    return {reply}
}) satisfies PageServerLoad

