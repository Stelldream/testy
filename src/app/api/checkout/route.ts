import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const {
    name,
    number,
    street,
    house,
    comment,
    promo,
    type,
    cartTotal,
    items
  } = await req.json()

  const message = `Name: ${name}%0ANumber: ${number}%0AStreet: ${street}%0AHouse: ${house}%0AComment: ${comment}%0APromo: ${
    promo ? 'yes' : 'no'
  }%0AType: ${type}%0A%0A*Total: $${
    promo === 'yes' ? cartTotal : cartTotal + 2
  }%0A%0A*Items: ${items
    .map(
      ({ name, quantity }: { name: string; quantity: string }) =>
        `${quantity} x ${name}`
    )
    .join(', ')}`

  const response = await fetch(
    `https://api.telegram.org/bot5893246790:AAH-o98oTh7DAdC11BZv8BQr15bILXooSHw/sendMessage?chat_id=-1001517281907&parse_mode=Markdown&text=${message}`,   
    { method: 'GET', cache: 'no-cache' }
  )

  return NextResponse.json(response)
}
