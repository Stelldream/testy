'use client'
import { useCart } from 'react-use-cart'
import Image from 'next/image'
import { EmptyCart } from '@/ui/Empty Cart'
import { useEffect, useState } from 'react'
import Loader from './loading'
import { useRouter } from 'next/navigation'
import { DELIVERY_PRICE_UKR, MINIMUM_ORDER_AMOUNT_UKR } from '@/utils/consts'

export default function Cart() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isEmptyCart, setIsEmptyCart] = useState(true)
  const router = useRouter()

  const {
    isEmpty,
    totalItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem
  } = useCart()

  useEffect(() => {
    if (items) {
      setIsLoaded(true)
      setIsEmptyCart(false)
    }
    if (isEmpty) {
      setIsEmptyCart(true)
    }
  }, [isEmpty, items])

  if (!isLoaded) return <Loader />
  if (isEmptyCart) return <EmptyCart isEng />
  return (
    <section className='cart section bd-container'>
      <h6 className='section-title'>Корзина</h6>
      <span className='section-subtitle'>Всього: {totalItems}</span>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div className='item-bio'>
              <Image src={item.image} width={100} height={100} alt='' />
              <div className='item-desc'>
                {item.quantity} x {item.name}
                <div className='change-qty'>
                  <button
                    className='bxs-minus-square bx-sm bx'
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity! - 1)
                    }
                  />
                  <span>₴{(item.quantity as number) * item.price}.00</span>
                  <button
                    className='bxs-plus-square bx-sm bx'
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity! + 1)
                    }
                  />
                </div>
              </div>
            </div>
            <button
              className='bxs-trash bx-sm bx'
              onClick={() => removeItem(item.id)}></button>
          </li>
        ))}
      </ul>
      <div className='subtotal'>
        <span>Всього: ₴{cartTotal}.00</span>
        <span>Доставка: ₴{DELIVERY_PRICE_UKR}.00</span>
        <hr />
        <span className='total'>
          Підсумок: ₴{cartTotal + DELIVERY_PRICE_UKR}.00
          {cartTotal + DELIVERY_PRICE_UKR < MINIMUM_ORDER_AMOUNT_UKR && (
            <span className='error'>
              Мінімальна сумма заказу ₴{MINIMUM_ORDER_AMOUNT_UKR}
            </span>
          )}
        </span>
        <button
          className={
            cartTotal + DELIVERY_PRICE_UKR < MINIMUM_ORDER_AMOUNT_UKR
              ? 'checkout-button disabled'
              : 'checkout-button'
          }
          disabled={cartTotal + DELIVERY_PRICE_UKR < MINIMUM_ORDER_AMOUNT_UKR}
          onClick={() => router.push('/shop/checkout')}>
          Далі
        </button>
      </div>
    </section>
  )
}
