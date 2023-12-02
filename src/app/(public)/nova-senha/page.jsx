import React from 'react'
import {League_Spartan} from 'next/font/google'
import { Inter } from 'next/font/google'
import InputSenha from '@/components/InputSenha'
import InputConfSenha from '@/components/InputConfSenha'


const league_Spartan = League_Spartan(
    {
        weight: '700',
        subsets: ['latin'],
    }
)

const inter = Inter(
  {
    weight: '600',
    subsets: ['latin']
  }
)


const NovaSenha = () => {
  return (
    <div className="flex justify-center items-center w-[1210px]">
      <div id="novaSenha-card" className="flex flex-col h-auto w-[496px] justify-center">
        <div id="novaSenha-title" className="h-[36px]">
          <div className={league_Spartan.className}>
          <h2 className="font-sans text-3xl league_Spartan text-secondary-500">Nova Senha</h2>
          </div>
        </div>
        <div id="novaSenha-body" className="w-auto h-auto">

          <div id="form-content" className="flex flex-col space-y-[30px] pt-6">
          <div className="h-[126px]">
            <form>
           <InputSenha placeholder="Nova Senha"/>
           <InputConfSenha/>
           </form>
           </div>
          </div>

          <div id="input" className="pt-[23px]">
          <div className={inter.className}>
            <button type="form" className="rounded-md w-[496px] h-[45px] bg-secondary-500 font-sans text-secondary-50">Salvar</button>
          </div>
          </div>
        </div>

        <div id="politicas" className="h-[74px] pt-[21px] flex flex-col items-center">
           <div className='flex'><p className="flex text-[14px] pl-4 text-[#979797]">Politicas de privacidade</p></div>
           <div className='flex'><p className="flex text-[14px] pl-4 pt-3 text-[#979797]">Direitos autorais © 2023 XXXX. Todos os direitos reservados.</p></div>
        </div>
      </div>
    </div>
  )
}

export default NovaSenha