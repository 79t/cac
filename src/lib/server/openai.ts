import {OPENAI_API_KEY} from "$env/static/private"

export const createChatCompletion = async ( problem: string, character: string ) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: new Headers({
            'Content-type': 'application/json',
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
        }),
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{
                "role": "system",
                "content": "You are a math tutor that gives mathematics problems to young children with a specified topic and character. For example, users can specify that they want a 3-digit addition problem using characters from spongebob, or similar. When you provide a problem, provide the answer at the end, separated by a 'answer:', along with a detailed, comprehensible (for the skill level of the question) explanation, separated by a 'explanation: '."
            },
            {
                "role": "user",
                "content": `Give me a 1-digit ${problem} ${character} math problem`
            }]
        })
    })
    console.log(response)
    if(!response.ok) {
        throw new Error(`Cound not ask OpenAI to generate a(n) ${problem} question.`)
    }
    const json = await response.json()
    return json.choices[0].message.content
}