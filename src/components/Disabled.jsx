import React from 'react'
import Image from 'next/image'

export default function Disabled() {
  return (
    <>
    <div className="flex flex-col justify-center items-center bg-white h-full m-6 p-64 rounded shadow-shadowSuave">
      <Image src="../manutencao.svg" className='w-56' width={100} height={200} alt=":(" />
        <p className='text-center text-gray-500 text-3xl mt-12'>
          Este módulo está em construção para atender melhor às suas necessidades.
        </p>
    </div>
    </>
  )
}

