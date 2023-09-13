'use client'
import Image from 'next/image'
import Link from 'next/link'

export const About = ({ isEng = false }: { isEng?: boolean }) => {
  return (
    <section className='about section bd-container' id='about'>
      <div className='about__container  bd-grid'>
        <div className='about__data'>
          <span className='section-subtitle about__initial'>
            {isEng ? 'About us' : 'Про нас'}
          </span>
          <h2 className='section-title about__initial'>
            {isEng ? (
              <>
                We cook the best <br /> tasty food
              </>
            ) : (
              <>
                Ми готуємо найкращу <br /> смачну їжу
              </>
            )}
          </h2>
          <p className='about__description'>
            {isEng
              ? 'We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.'
              : 'Ми готуємо найкращу їжу у всьому місті, з відмінним обслуговуванням клієнтів, найкращими стравами та за найкращою ціною, завітайте до нас.'}
          </p>
          <Link href='/about' className='button'>
            {isEng ? 'Explore history' : 'Історія'}
          </Link>
        </div>

        <Image
          src='/about.jpg'
          alt=''
          className='about__img'
          width={280}
          height={100}
        />
      </div>
    </section>
  )
}
