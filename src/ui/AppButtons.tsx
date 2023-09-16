'use client'
import { toast } from 'react-toastify'
import Image from 'next/image'

export default function AppButtons() {
  return (
    <>
      <button onClick={() => toast('Coming soon...')}>
        <Image
          src='/app1.png'
          alt=''
          className='app__store'
          width={120}
          height={120}
        />
      </button>
      <button onClick={() => toast('Coming soon...')}>
        <Image
          src='/app2.png'
          alt=''
          className='app__store'
          width={120}
          height={120}
        />
      </button>
    </>
  )
}
