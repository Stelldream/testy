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
      .typeError('Number incorrect')
      .required('Number is required'),
    street: yup.string().required('Street is required'),
    house: yup.string().required('House number is required'),
    comment: yup.string(),
    promo: yup.string(),
    type: yup.string().required()
  })
  .required()

export default function Checkout() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPromo, setIsPromo] = useState(false)
  const [isEmptyCart, setIsEmptyCart] = useState(true)
  const [geo, setGeo] = useState<{
    country: string | undefined
    ip: string | undefined
  }>({
    country: 'undefined',
    ip: 'undefined'
  })
  const { cartTotal, items, isEmpty, emptyCart } = useCart()
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
      else setError('promo', { message: 'Code incorrect' })
    } else {
      setError('promo', { message: 'Field is empty' })
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
      currency: '$',
      country: geo.country,
      ip: geo.ip
    }
    const res = await fetch('../../api/checkout', {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify(body)
    })
    if (res.ok) {
      router.push('/en/shop/finish')
      emptyCart()
    } else toast('Error...')
  }

  if (!isLoaded) return <Loader />
  if (isEmptyCart) return <EmptyCart isEng />
  return (
    <section className='cart section bd-container checkout'>
      <span className='section-subtitle'>Delivery</span>
      <h6 className='section-title'>Checkout</h6>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='field'>
          <span>Name</span>
          <input
            inputMode='text'
            className={errors.name?.message ? 'error' : undefined}
            {...register('name')}
            placeholder='John Doe*'
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className='field'>
          <span>Tel. Number</span>
          <input
            inputMode='tel'
            className={errors.number?.message ? 'error' : undefined}
            {...register('number')}
            placeholder='+38 066 432 75 35*'
          />
          <p>{errors.number?.message}</p>
        </div>

        <div className='field'>
          <span>Street</span>
          <input
            inputMode='text'
            className={errors.street?.message ? 'error' : undefined}
            {...register('street')}
            placeholder='Ave. Pobedy*'
          />
          <p>{errors.street?.message}</p>
        </div>

        <div className='field'>
          <span>House</span>
          <input
            inputMode='text'
            className={errors.house?.message ? 'error' : undefined}
            {...register('house')}
            placeholder='84-а*'
          />
          <p>{errors.house?.message}</p>
        </div>

        <div className={isPromo ? 'field promo active' : 'field promo'}>
          <span>Promo code</span>
          <div>
            <input
              inputMode='text'
              className={errors.promo?.message ? 'error' : undefined}
              {...register('promo')}
              placeholder='Promo code'
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
          <span>Payment method</span>
          <div className='radio'>
            <label>
              <i
                className={`bx ${
                  watch('type') === 'cash'
                    ? 'bx-radio-circle-marked'
                    : 'bx-radio-circle'
                } bx-sm`}
              />
              <span>Cash</span>
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
              <span>Cashless</span>
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
              onClick={() => toast.error('Ooopps... Still in development...')}>
              <i className={'bx bx-radio-circle bx-sm'} />
              <span>PayPal</span>
            </button>
          </div>
        </div>

        <div className='field'>
          <span>Comment</span>
          <textarea
            className={errors.comment?.message ? 'error' : undefined}
            {...register('comment')}
            placeholder='Call me as soon as possible please...'
          />
          <p>{errors.comment?.message}</p>
        </div>

        <div className='subtotal'>
          <span>Subtotal: {!isEmptyCart ? `$${cartTotal}.00` : '....'}</span>
          <span>Delivery: {isPromo ? '$0.00 PROMO' : '$2.00'}</span>
          <hr />
          <span className='total'>
            Total:{' '}
            {!isEmptyCart ? `$${cartTotal + (isPromo ? 0 : 2)}.00` : '....'}
          </span>
        </div>

        <button
          className={isValid ? 'checkout-button' : 'checkout-button disabled'}
          disabled={!isValid}
          type='submit'>
          Confirm
        </button>
      </form>
    </section>
  )
}
