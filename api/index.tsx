import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'

export const app = new Frog({
  basePath: '/api',
  title: 'Eagle Legacy',
})

app.frame('/', (c) => {
  return c.res({
    image: 'https://gateway.pinata.cloud/ipfs/QmZ6z8H6H8H6H8H6H8H6H8H6H8H6H8H6H8H6H8H6H8H6', // On mettra ton lien d'image Zora ici
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
