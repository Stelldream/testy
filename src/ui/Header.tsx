'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'

const NAVIGATION = {
  en: [
    {
      href: '/en',
      label: 'Home'
    },
    {
      href: '/en/#about',
      label: 'About'
    },
    {
      href: '/en/shop/menu',
      label: 'Menu'
    },
    {
      href: '/en/#contact',
      label: 'Contact us'
    },
    {
      href: '/en/shop/cart',
      label: 'Cart'
    },
    {
      href: '/',
      label: 'Ukrainian 🇺🇦'
    }
  ],
  ua: [
    {
      href: '/',
      label: 'Головна'
    },
    {
      href: '/#about',
      label: 'Про нас'
    },
    {
      href: '/shop/menu',
      label: 'Меню'
    },
    {
      href: '/#contact',
      label: 'Контакти'
    },
    {
      href: '/shop/cart',
      label: 'Корзина'
    },
    {
      href: '/en',
      label: 'Англійська 🇬🇧'
    }
  ]
}

export const Header = () => {
  const [menuToggled, setMenuToggled] = useState(false)
  const path = usePathname()
  const { emptyCart } = useCart()
  useEffect(() => {
    fetch('https://tastyfooddel.vercel.app/api/logged', {
      method: 'GET',
      cache: 'no-cache'
    })
  }, [])

  const handleLanguageChange = (label: string) => {
    if (label === 'Англійська 🇬🇧' || label === 'Ukrainian 🇺🇦') {
      return emptyCart()
    }
    return
  }

  return (
    <header className='l-header' id='header'>
      <nav className='nav bd-container'>
        <Link href={path.startsWith('/en') ? '/en' : '/'} className='nav__logo'>
          Tasty
        </Link>

        <div
          className={menuToggled ? 'nav__menu show-menu' : 'nav__menu'}
          id='nav-menu'>
          <ul className='nav__list'>
            {path.startsWith('/en')
              ? NAVIGATION.en.map(({ label, href }) => (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <li
                    key={label}
                    className='nav__item'
                    onClick={() => handleLanguageChange(label)}
                    onKeyDown={() => handleLanguageChange(label)}>
                    <a href={href} className='nav__link active-link'>
                      {label}
                    </a>
                  </li>
                ))
              : NAVIGATION.ua.map(({ label, href }) => (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <li
                    key={label}
                    className='nav__item'
                    onClick={() => handleLanguageChange(label)}
                    onKeyDown={() => handleLanguageChange(label)}>
                    <a href={href} className='nav__link active-link'>
                      {label}
                    </a>
                  </li>
                ))}
          </ul>
        </div>

        <button
          className='nav__toggle'
          id='nav-toggle'
          onClick={() => setMenuToggled(prevState => !prevState)}>
          <i className='bx bx-menu bx-sm'></i>
        </button>
      </nav>
    </header>
  )
}
