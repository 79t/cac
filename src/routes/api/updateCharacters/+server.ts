import { PrismaClient } from "@prisma/client";
import type { RequestEvent, RequestHandler } from "./$types";

export const POST: RequestHandler = async (re: RequestEvent) => {
    const prisma = new PrismaClient()
    const j = await re.request.json()
    const x = await prisma.user.update({
        where: {
            id: j['user_id']
        },
        data: {
            characters: j['characters']
        }
    })
    console.log('UPDATED CHARACTERS TO' + x['characters'])
    return new Response(JSON.stringify({
        characters: x['characters']
    }))
}
