import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'

export const app = new Frog({
  basePath: '/api',
  title: 'Eagle Legacy',
})

app.frame('/', (c) => {
  return c.res({
     'https://i.imgur.com/v88vU9m.png',
    imageAspectRatio: '1:1',
    intents: [
      <Button value="check">Check Eligibility</Button>,
      <Button.Link href="https://zora.co/collect/base:0x872bd846596cc1aede8fd800997d242e3473fa83">View on Zora</Button.Link>,
      <Button value="blessing">Send Blessing</Button>,
    ],
  })
})

export const GET = handle(app)
export const POST = handle(app)
