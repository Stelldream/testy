'use client'
import { useCart } from 'react-use-cart'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useEffect, useState } from 'react'
import Loader from '@/app/shop/cart/loading'
import { EmptyCart } from '@/ui/Empty Cart'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { getGeo } from '@/utils/getGeo'

type FormValues = {
  name: string
  number: number
  street: string
  house: string
  comment?: string
  promo?: string
  type: string
}

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    number: yup
      .number()
      .typeError('Номер невірний')
      .required('Номер обов`язковий'),
    street: yup.string().required('Вулиця обов`язкова'),
    house: yup.string().required('Номер будинку обов`язковий'),
    comment: yup.string(),
    promo: yup.string(),
    type: yup.string().required()
  })
  .required()

export default function Checkout() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPromo, setIsPromo] = useState(false)
  const [isEmptyCart, setIsEmptyCart] = useState(true)
  const { cartTotal, items, isEmpty, emptyCart } = useCart()
  const [geo, setGeo] = useState<{
    country: string | undefined
    ip: string | undefined
  }>({
    country: 'undefined',
    ip: 'undefined'
  })
  const router = useRouter()

  useEffect(() => {
    const get = async () => {
      const geo = await getGeo()
      setGeo(geo)
    }
    get()
  }, [])

  useEffect(() => {
    if (items) {
      setIsLoaded(true)
      setIsEmptyCart(false)
    }
    if (isEmpty) {
      setIsEmptyCart(true)
    }
  }, [isEmpty, items])

  const checkPromo = async () => {
    const code = watch('promo')
    if (code) {
      if (code === '9JFH-RNF1-KK02-H7QN') setIsPromo(true)
      else setError('promo', { message: 'Код невірний' })
    } else {
      setError('promo', { message: 'Поле пусте' })
    }
  }

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid }
  } = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: { type: 'cashless' }
  })
  const onSubmit = async (fieldsData: FormValues) => {
    const body = {
      ...fieldsData,
      promo: isPromo,
      items,
      cartTotal,
      currency: '₴',
      country: geo.country,
      ip: geo.ip
    }
    const res = await fetch('../api/checkout', {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify(body)
    })
    if (res.ok) {
      router.push('/shop/finish')
      emptyCart()
    } else toast('Помилка...')
  }

  if (!isLoaded) return <Loader />
  if (isEmptyCart) return <EmptyCart />
  return (
    <section className='cart section bd-container checkout'>
      <span className='section-subtitle'>Доставка</span>
      <h6 className='section-title'>Оплата</h6>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='field'>
          <span>Ім&apos;я</span>
          <input
            inputMode='text'
            className={errors.name?.message ? 'error' : undefined}
            {...register('name')}
            placeholder='Іван Іванов*'
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className='field'>
          <span>Номер телефону</span>
          <input
            inputMode='tel'
            className={errors.number?.message ? 'error' : undefined}
            {...register('number')}
            placeholder='+38 066 432 75 35*'
          />
          <p>{errors.number?.message}</p>
        </div>

        <div className='field'>
          <span>Вулиця</span>
          <input
            inputMode='text'
            className={errors.street?.message ? 'error' : undefined}
            {...register('street')}
            placeholder='Вул. Победи*'
          />
          <p>{errors.street?.message}</p>
        </div>

        <div className='field'>
          <span>Будинок</span>
          <input
            inputMode='text'
            className={errors.house?.message ? 'error' : undefined}
            {...register('house')}
            placeholder='84-а*'
          />
          <p>{errors.house?.message}</p>
        </div>

        <div className={isPromo ? 'field promo active' : 'field promo'}>
          <span>Промо код</span>
          <div>
            <input
              inputMode='text'
              className={errors.promo?.message ? 'error' : undefined}
              {...register('promo')}
              placeholder='Промо код'
            />
            <button
              type='button'
              className='bx bx-dish bx-sm button-promo'
              onClick={checkPromo}
            />
          </div>
          <p>{errors.promo?.message}</p>
        </div>

        <div className='radio-box'>
          <span>Спосіб оплати</span>
          <div className='radio'>
            <label>
              <i
                className={`bx ${
                  watch('type') === 'cash'
                    ? 'bx-radio-circle-marked'
                    : 'bx-radio-circle'
                } bx-sm`}
              />
              <span>Готівка</span>
              <input {...register('type')} type='radio' value='cash' />
            </label>
            <label>
              <i
                className={`bx ${
                  watch('type') === 'cashless'
                    ? 'bx-radio-circle-marked'
                    : 'bx-radio-circle'
                } bx-sm`}
              />
              <span>Картка</span>
              <input
                {...register('type')}
                type='radio'
                value='cashless'
                defaultChecked
              />
            </label>
            <button
              className='paypal'
              type='button'
              onClick={() => toast.error('Уппсс... Ще у розробці...')}>
              <i className={'bx bx-radio-circle bx-sm'} />
              <span>Пейпал</span>
            </button>
          </div>
        </div>

        <div className='field'>
          <span>Комментарій</span>
          <textarea
            className={errors.comment?.message ? 'error' : undefined}
            {...register('comment')}
            placeholder='Подзвоніть мені скоріше будьласка...'
          />
          <p>{errors.comment?.message}</p>
        </div>

        <div className='subtotal'>
          <span>Всього: {!isEmptyCart ? `₴${cartTotal}.00` : '....'}</span>
          <span>Доставка: {isPromo ? '₴0.00 PROMO' : '₴80.00'}</span>
          <hr />
          <span className='total'>
            Підсумок:{' '}
            {!isEmptyCart ? `₴${cartTotal + (isPromo ? 0 : 80)}.00` : '....'}
          </span>
        </div>

        <button
          className={isValid ? 'checkout-button' : 'checkout-button disabled'}
          disabled={!isValid}
          type='submit'>
          Підтвердити
        </button>
      </form>
    </section>
  )
}
