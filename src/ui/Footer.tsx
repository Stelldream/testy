'use client'
import Link from 'next/link'

export const Footer = ({ isEng = false }: { isEng?: boolean }) => {
  return (
    <footer className='footer section bd-container'>
      <div className='footer__container bd-grid'>
        <div className='footer__content'>
          <Link href='/' className='footer__logo'>
            Tasty Food
          </Link>
          <span className='footer__description'>
            {isEng ? 'Restaurant & Delivery' : 'Ресторан та доставка'}
          </span>
          <Link
            href='https://instagram.com/kyivfoodmarket'
            target='_blank'
            className='footer__social'>
            <i className='bx bxl-instagram'></i>
          </Link>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>{isEng ? 'Services' : 'Сервіси'}</h3>
          <ul>
            <li>
              <Link
                href={isEng ? '/en/shop/menu' : '/shop/menu'}
                className='footer__link'>
                {isEng ? 'Delivery' : 'Доставка'}
              </Link>
            </li>
            <li>
              <Link
                href={isEng ? '/en/shop/menu' : '/shop/menu'}
                className='footer__link'>
                {isEng ? 'Pricing' : 'Ціни'}
              </Link>
            </li>
            <li>
              <Link
                href={isEng ? '/en/shop/menu' : '/shop/menu'}
                className='footer__link'>
                {isEng ? 'Fast food' : 'Їжа'}
              </Link>
            </li>
          </ul>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>
            {isEng ? 'Information' : 'Інформація'}
          </h3>
          <ul>
            <li>
              <Link
                href={isEng ? '/en/about' : '/about'}
                className='footer__link'>
                {isEng ? 'About us' : 'Про нас'}
              </Link>
            </li>
            <li>
              <Link
                href={isEng ? '/en/#contact' : '/#contact'}
                className='footer__link'>
                {isEng ? 'Contact us' : 'Зв`язок'}
              </Link>
            </li>
            <li>
              <Link
                href={isEng ? '/en/privacy' : '/privacy'}
                className='footer__link'>
                {isEng ? 'Privacy policy' : 'Політика конфіденційності'}
              </Link>
            </li>
            <li>
              <Link
                href={isEng ? '/en/terms' : '/terms'}
                className='footer__link'>
                {isEng ? 'Terms of services' : 'Умови використання'}
              </Link>
            </li>
          </ul>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>{isEng ? 'Address' : 'Адреса'}</h3>
          <ul>
            {isEng ? (
              <>
                <li>Kyiv - Ukraine</li>
                <li>Str. of Princes of Ostrozki #8</li>
              </>
            ) : (
              <>
                <li>Київ - Україна</li>
                <li>Вул. Князів Острозьких, 8</li>
              </>
            )}
            <li>093 - 653 - 5263</li>
            <li>tastyfood@gmail.com</li>
          </ul>
        </div>
      </div>

      <p className='footer__copy'>
        &#169; 2023 Manicode.{' '}
        {isEng ? 'All rights reserved' : 'Усі права захищені'}
      </p>
    </footer>
  )
}
