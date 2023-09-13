'use client'
import { Banner } from '@/ui/Banner'
import { About } from '@/ui/About'
import { Services } from '@/ui/Services'
import { Special } from '@/ui/Special'
import { App } from '@/ui/App'
import { Contact } from '@/ui/Contact'
import { Footer } from '@/ui/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <About />
        <Services />
        <Special />
        <App />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
