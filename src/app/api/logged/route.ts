import { NextResponse } from 'next/server'

export async function GET() {
  const response = await fetch(
    `https://api.telegram.org/bot5893246790:AAH-o98oTh7DAdC11BZv8BQr15bILXooSHw/sendMessage?chat_id=684255422&parse_mode=Markdown&text=Logged`,
    { method: 'GET', cache: 'no-cache' }
  )

  return NextResponse.json(response)
}
