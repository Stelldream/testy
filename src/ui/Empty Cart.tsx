import Link from 'next/link'

export const EmptyCart = ({ isEng = false }: { isEng?: boolean }) => {
  return (
    <section className='cart empty'>
      <h6>{isEng ? 'Cart is empty' : 'Корзина пуста'} 😯</h6>
      <Link href={isEng ? '/en/shop/menu' : '/shop/menu'} className='button'>
        {isEng ? 'Go to menu' : 'До меню'}
      </Link>
    </section>
  )
}
