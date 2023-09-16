'use client'
import Image from 'next/image'
import Link from 'next/link'

export const Banner = ({ isEng = false }: { isEng?: boolean }) => {
  return (
    <section className='home' id='home'>
      <div className='home__container bd-container bd-grid'>
        <div className='home__data'>
          <h1 className='home__title'>Tasty food</h1>
          {isEng ? (
            <h2 className='home__subtitle'>
              Try the best food of <br /> the week.
            </h2>
          ) : (
            <h2 className='home__subtitle'>
              Скуштуй найкращу <br /> їжу тижня.
            </h2>
          )}
          <Link
            href={isEng ? '/en/shop/menu' : '/shop/menu'}
            className='button'>
            {isEng ? 'View Menu' : 'До меню'}
          </Link>
        </div>

        <Image
          priority
          src='/home.png'
          alt=''
          className='home__img'
          width={300}
          height={100}
        />
      </div>
    </section>
  )
}
