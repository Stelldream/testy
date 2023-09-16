'use client'
import Link from 'next/link'

export const Contact = ({ isEng = false }: { isEng?: boolean }) => {
  return (
    <section className='contact section bd-container' id='contact'>
      <div className='contact__container bd-grid'>
        <div className='contact__data'>
          <span className='section-subtitle contact__initial'>
            {isEng ? 'Let`s talk' : 'Поговоримо?'}
          </span>
          <h2 className='section-title contact__initial'>
            {isEng ? 'Contact us' : 'Зв`язок з нами'}
          </h2>
          <p className='contact__description'>
            {isEng
              ? 'If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.'
              : 'Якщо ви бажаєте забронювати столик у нашому ресторані, зв’яжіться з нами, і ми швидко забезпечимо вас за допомогою нашого цілодобового чату.'}
          </p>
        </div>

        <div className='contact__button'>
          <Link
            href='https://wa.me/380936535263'
            className='button'
            target='_blank'>
            {isEng ? 'Contact us now' : 'Зв`язатися зараз'}
          </Link>
        </div>
      </div>
    </section>
  )
}
