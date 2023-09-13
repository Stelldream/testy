import { NextResponse } from 'next/server'

export async function GET() {
  const response = await fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&parse_mode=Markdown&text=Logged`,
    { method: 'GET', cache: 'no-cache' }
  )

  return NextResponse.json(response)
}
