'use client'
import { CartProvider } from 'react-use-cart'
import { Header } from '@/ui/Header'
import { ToastContainer } from 'react-toastify'

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartProvider>
        <Header />
        {children}
      </CartProvider>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}
