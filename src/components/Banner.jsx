import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.svg'


const Banner = () => {
  return (
    <div id="sidebar-tela-login" className="relative h-screen w-[710px] bg-gradient-to-t from-[#E9F1FB] rounded-br-[50px]">
      <Image src={Logo} className='absolute top-[36px] left-[92px] w-[178px] h-[52px]' />
      <p className='absolute top-[200px] left-[92px] text-[45px] font-medium text-4xl max-w-[620px]'>Gerencie suas movimentações financeiras <span className='font-bold'>com facilidade<span className='text-[#11D07D]'>.</span></span></p>
      <div className='absolute top-[600px] left-[80px] flex flex-col gap-5'>
        <div className='bg-white h-[79px] w-[505px] rounded-md'></div>
        <div className='bg-white h-[79px] w-[505px] rounded-md'></div>
        <div className='bg-white h-[79px] w-[505px] rounded-md'></div>
      </div>

    </div>
  )
}

export default Banner