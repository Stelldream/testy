import Link from 'next/link'

export default function Finish() {
  return (
    <section className='cart empty'>
      <h6>We will contact you</h6>
      <p>as soon as possible to confirm the order 😇</p>
      <Link href='/en/shop/menu' className='button'>
        Go to menu
      </Link>
    </section>
  )
}
