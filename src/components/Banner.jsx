import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.svg'


const Banner = () => {
  return (
    <div id="sidebar-tela-login" className="relative h-screen w-[710px] bg-gradient-to-t from-[#E9F1FB] rounded-br-[50px]">
      <Image src={Logo} className='absolute top-[60px] left-[90px] w-[295px] h-[78px]' />
      <p className='absolute top-[331px] left-[90px] text-[45px] font-normal max-w-[620px] text-secondary-500'>Gerencie suas movimentações financeiras <span className='font-bold'>com facilidade<span className='text-[#11D07D] font-bold'>.</span></span></p>
      <div className='absolute top-[612px] left-[92px] flex flex-col gap-5'>
        <div className='bg-white h-[79px] w-[505px] rounded-lg shadow-shadowSuave'></div>
        <div className='bg-white h-[79px] w-[505px] rounded-lg shadow-shadowSuave'></div>
        <div className='bg-white h-[79px] w-[505px] rounded-lg shadow-shadowSuave'></div>
      </div>

    </div>
  )
}

export default Banner