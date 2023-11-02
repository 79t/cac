# GPTutor

An app to tutor students using GPT-4

## Setup/Running

Put an `OPENAI_API_KEY` in .env.local and PostgreSQL `DATABASE_URL` in .env, then run these commands

```sh
npm i
npx prisma generate
npm run dev -- --open
```
