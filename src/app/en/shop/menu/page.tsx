import { Menu as MenuShop } from '@/ui/Menu'
import { Footer } from '@/ui/Footer'
import { MENU_ENG } from '@/utils/consts'

export default function Menu() {
  return (
    <>
      <section className='menu section bd-container' id='menu'>
        <span className='section-subtitle'>Delivery</span>
        <h2 className='section-title'>Menu of the season</h2>
        <div className='filter'>
          {MENU_ENG.map(({ name, link }) => (
            <a className='menu__name' key={name} href={`#${link}`}>
              {name}
            </a>
          ))}
        </div>
        <MenuShop categories={MENU_ENG} isEng />
      </section>
      <Footer />
    </>
  )
}
