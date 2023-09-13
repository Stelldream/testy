'use client'
import Image from 'next/image'
import { useCart } from 'react-use-cart'
import { toast } from 'react-toastify'
import { Category, Item } from '@/utils/consts'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'

export const Menu = ({
  categories,
  isEng = false
}: {
  categories: Category[]
  isEng?: boolean
}) => {
  const [isEmptyCart, setIsEmptyCart] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalInfo, setModalInfo] = useState<Item>({
    id: '0',
    image: '/set1.png',
    name: 'Name',
    subtitle: 'Subtitle',
    desc: 'Description',
    price: 0
  })
  const { addItem, totalItems } = useCart()

  const toggleModal = () => {
    setModalIsOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (totalItems) setIsEmptyCart(false)
  }, [totalItems])

  return (
    <>
      {categories.map(({ items, name, link }) => (
        <div key={name} id={link}>
          <span className='section-title category'>{name}</span>
          <div className='menu__container bd-grid'>
            {items.map(({ image, name, price, id, subtitle, desc }) => (
              <div key={id} className='menu__content'>
                <Image
                  src={image}
                  alt=''
                  className='menu__img'
                  width={210}
                  height={210}
                  quality={100}
                  onClick={() => {
                    toggleModal()
                    setModalInfo({ image, name, price, subtitle, desc, id })
                  }}
                />
                <h3 className='menu__name'>{name}</h3>
                <span className='menu__detail'>{subtitle}</span>
                <span className='menu__preci'>
                  {isEng ? '$' : '₴'}
                  {price}.00
                </span>
                <button
                  className='button menu__button'
                  onClick={() => {
                    addItem({ name, price, id, image })
                    toast(`${name} ${isEng ? 'added' : 'додано'}`)
                  }}>
                  <i className='bx bx-cart-alt'></i>
                </button>
              </div>
            ))}
            {modalIsOpen && (
              <Modal
                isOpen
                onRequestClose={toggleModal}
                className='modal'
                overlayClassName='overlay'
                ariaHideApp={false}>
                <div className='menu__content'>
                  <Image
                    src={modalInfo.image}
                    alt=''
                    className='menu__img'
                    width={280}
                    height={280}
                    quality={100}
                  />
                  <h3 className='menu__name'>{modalInfo.name}</h3>
                  <span className='menu__detail'>{modalInfo.subtitle}</span>
                  <span className='menu__preci menu__desc'>
                    {isEng ? 'Description: ' : 'Опис: '}
                    {modalInfo.desc}
                  </span>
                  <span className='menu__preci'>
                    {isEng ? '$' : '₴'}
                    {modalInfo.price}.00
                  </span>
                  <button
                    className='button menu__button'
                    onClick={() => {
                      addItem({
                        name: modalInfo.name,
                        price: modalInfo.price,
                        id: modalInfo.id,
                        image: modalInfo.image
                      })
                      toast(`${modalInfo.name} ${isEng ? 'added' : 'додано'}`)
                      toggleModal()
                    }}>
                    <i className='bx bx-cart-alt'></i>
                  </button>
                </div>
              </Modal>
            )}
          </div>
        </div>
      ))}
      {!isEmptyCart && (
        <Link
          href={isEng ? '/en/shop/cart' : '/shop/cart'}
          className='to-cart bx-tada'>
          <i className='bx bx-cart-alt bx-sm' />
          {totalItems}
        </Link>
      )}
      <button
        className='section-title category to-top'
        onClick={() => window.scrollTo(0, 0)}>
        <i className='bx bxs-to-top bx-flashing' />
      </button>
    </>
  )
}
