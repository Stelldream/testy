import Link from 'next/link'

export default function Finish() {
  return (
    <section className='cart empty'>
      <h6>Ми зв&apos;яжемося з вами</h6>
      <p>якомога швидше для підтвердження замовлення 😇</p>
      <Link href='/shop/menu' className='button'>
        До меню
      </Link>
    </section>
  )
}
