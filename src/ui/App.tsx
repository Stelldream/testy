'use client'
import Image from 'next/image'
import AppButtons from '@/ui/AppButtons'

export const App = ({ isEng = false }: { isEng?: boolean }) => {
  return (
    <section className='app section bd-container'>
      <div className='app__container bd-grid'>
        <div className='app__data'>
          <span className='section-subtitle app__initial'>
            {isEng ? 'App' : 'Додаток'}
          </span>
          <h2 className='section-title app__initial'>
            {isEng ? 'App is coming soon' : 'Згодом...'}
          </h2>
          <p className='app__description'>
            {isEng
              ? 'Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.'
              : 'Знайдіть нашу програму та завантажте її, ви можете робити бронювання, замовляти їжу, бачити свої доставки в дорозі та багато іншого.'}
          </p>
          <div className='app__stores'>
            <AppButtons />
          </div>
        </div>

        <Image
          src='/movil-app.png'
          alt=''
          className='app__img'
          width={230}
          height={100}
        />
      </div>
    </section>
  )
}
