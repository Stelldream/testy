'use client'
import Image from 'next/image'
import Link from 'next/link'

const MENU_ENG = [
  {
    image: '/sus5.png',
    name: 'Philadelphia',
    subtitle: 'with eel',
    price: 14
  },
  {
    image: '/set1.png',
    name: 'Set #1',
    subtitle: '950 g.',
    price: 30
  },
  {
    image: '/miso2.jpeg',
    name: 'Miso soup',
    subtitle: 'with tuna',
    price: 14
  }
]
const MENU_UKR = [
  {
    image: '/sus5.png',
    name: 'Філадельфія',
    subtitle: 'з вугром',
    price: 14 * 40
  },
  {
    image: '/set1.png',
    name: 'Сет #1',
    subtitle: '950 гр.',
    price: 30 * 40
  },
  {
    image: '/miso2.jpeg',
    name: 'Місо суп',
    subtitle: 'з тунцем',
    price: 14 * 40
  }
]

export const Special = ({ isEng = false }: { isEng?: boolean }) => {
  return (
    <section className='menu section bd-container' id='menu'>
      <span className='section-subtitle'>
        {isEng ? 'Special' : 'Пропозиція'}
      </span>
      <h2 className='section-title'>
        {isEng ? 'Menu of the season' : 'Меню сезону'}
      </h2>

      <div className='menu__container bd-grid'>
        {isEng
          ? MENU_ENG.map(({ image, name, price, subtitle }) => (
              <div key={name} className='menu__content'>
                <Image
                  src={image}
                  alt=''
                  className='menu__img'
                  width={100}
                  height={100}
                />
                <h3 className='menu__name'>{name}</h3>
                <span className='menu__detail'>{subtitle}</span>
                <span className='menu__preci'>${price}.00</span>
                <Link
                  href={isEng ? '/en/shop/menu' : '/shop/menu'}
                  className='button menu__button'>
                  <i className='bx bx-cart-alt'></i>
                </Link>
              </div>
            ))
          : MENU_UKR.map(({ image, name, price, subtitle }) => (
              <div key={name} className='menu__content'>
                <Image
                  src={image}
                  alt=''
                  className='menu__img'
                  width={100}
                  height={100}
                />
                <h3 className='menu__name'>{name}</h3>
                <span className='menu__detail'>{subtitle}</span>
                <span className='menu__preci'>₴{price}.00</span>
                <Link
                  href={isEng ? '/en/shop/menu' : '/shop/menu'}
                  className='button menu__button'>
                  <i className='bx bx-cart-alt'></i>
                </Link>
              </div>
            ))}
      </div>
      <Link
        href={isEng ? '/en/shop/menu' : '/shop/menu'}
        className='button'
        style={{
          display: 'block',
          textAlign: 'center',
          maxWidth: 'max-content',
          margin: ' 35px auto 0'
        }}>
        {isEng ? 'View Menu' : 'До меню'}
      </Link>
    </section>
  )
}
