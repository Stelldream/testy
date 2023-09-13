import 'boxicons/css/boxicons.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import '../scss/styles.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Provider } from '@/app/Provider'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Tasty Food | Delivery',
  description:
    'Ми готуємо найкращу їжу у всьому місті, з відмінним обслуговуванням клієнтів, найкращими стравами та за найкращою ціною, завітайте до нас.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
