import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Frame1 from '../../public/Frame1.svg'
import Frame2 from '../../public/Frame2.svg'
import Frame3 from '../../public/Frame3.svg'

const Banner = () => {
  return (
    <div id="sidebar-tela-login" className="relative h-screen w-[710px] bg-gradient-to-t from-[#E9F1FB] rounded-br-[50px]">
      <div className='absolute top-[60px] left-[90px]'><Image src={Logo} width={500} height={500}  className=' w-[295px] h-[78px]' /></div>
      <div className='absolute top-[300px] left-[90px] right-[20px]'>
        <p className=' text-[42px] font-normal max-w-[620px] text-secondary-500'>
          Gerencie suas movimentações financeiras 
          <span className='font-bold'> com facilidade<span className='text-[#11D07D] font-bold'>.</span></span>
          </p>
      </div>
      <div className='absolute relative top-[500px] left-[80px] h-[500px] w-[500px]'>

          <Image src={Frame1} width={500} height={500} className='h-auto w-auto ' />
       
          <Image src={Frame2} width={500} height={500} className='h-auto w-auto' />
        
          <Image src={Frame3} width={500} height={500} className='h-auto w-auto' />
       

      </div>

    </div>
  )
}

export default Banner