import { Menu as MenuShop } from '@/ui/Menu'
import { Footer } from '@/ui/Footer'
import { MENU_UKR } from '@/utils/consts'

export default function Menu() {
  return (
    <>
      <section className='menu section bd-container' id='menu'>
        <span className='section-subtitle'>Доставка</span>
        <h2 className='section-title'>Меню сезону</h2>
        <div className='filter'>
          {MENU_UKR.map(({ name, link }) => (
            <a className='menu__name' key={name} href={`#${link}`}>
              {name}
            </a>
          ))}
        </div>
        <MenuShop categories={MENU_UKR} />
      </section>
      <Footer />
    </>
  )
}
