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
    <div class="flex justify-center items-center w-[1210px]">
      <div id="novaSenha-card" class="flex flex-col h-auto w-[496px] justify-center">
        <div id="novaSenha-title" class="h-[36px]">
          <div className={league_Spartan.className}>
          <h2 class="font-sans text-3xl league_Spartan text-secondary-500">Nova Senha</h2>
          </div>
        </div>
        <div id="novaSenha-body" class="w-auto h-auto">

          <div id="form-content" class="flex flex-col space-y-[30px] pt-6">
          <div className="h-[126px]">
           <InputSenha/>
           <InputConfSenha/>
           </div>
          </div>

          <div id="input" class="pt-[23px]">
          <div className={inter.className}>
            <button class="rounded-md w-[496px] h-[45px] bg-secondary-500 font-sans text-secondary-50">Salvar</button>
          </div>
          </div>
        </div>

        <div id="politicas" class="h-[74px] pt-[21px] flex flex-col items-center">
           <div class='flex'><p class="flex text-[14px] pl-4 text-[#979797]">Politicas de privacidade</p></div>
           <div class='flex'><p class="flex text-[14px] pl-4 pt-3 text-[#979797]">Direitos autorais © 2023 XXXX. Todos os direitos reservados.</p></div>
        </div>
      </div>
    </div>
  )
}

export default NovaSenha