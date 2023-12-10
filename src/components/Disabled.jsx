import React from 'react'
import Image from 'next/image'

export default function Disabled() {
  return (
    <div className="flex flex-col justify-center items-center bg-white h-80 m-6 p-64 rounded shadow-shadowSuave">
      <Image src="../dinheiro.svg" className='w-28' width={40} height={200} alt=":(" />
        <p className='text-center text-gray-500 text-3xl'>
          Ops! estamos passando por problemas técnicos. Por favor, volte mais tarde
        </p>
    </div>
  )
}

