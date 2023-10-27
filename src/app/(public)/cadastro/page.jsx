import React from 'react'
import {League_Spartan} from 'next/font/google'
import { Inter } from 'next/font/google'
import {
  Eye,
  EyeSlash
} from 'iconsax-react'



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


const Cadastro = () => {
  return (
    <div class="flex justify-center items-center w-[1210px]">
      <div id="cadastro-card" class="flex flex-col h-auto w-[496px] justify-center">
        <div id="cadastro-title" class="h-14 ">
          <div className={league_Spartan.className}>
          <h2 class="font-sans text-3xl league_Spartan">Crie sua conta</h2>
          </div>
        </div>
        <div id="cadastro-body" class="w-auto">
          <div id="nome-sobrenome" class="flex flex space-x-4 ">
            <input type="text" id="name" name="name" value="" placeholder="Nome" class="border rounded-md  pl-3 text-[16px] w-[227px] h-[48px] font-sans"></input>
            <input type="text" id="name" name="sobrenome" value="" placeholder="Sobrenome" class="border rounded-md pl-3 text-[16px] w-[247px] h-[48px] font-sans"></input>
          </div>

          <div id="form-content" class="flex flex-col space-y-6 pt-6">
            <input type="text" id="name" name="cpf" value="" placeholder="Username" class="border rounded-md pl-3 text-[16px] font-sans font-sans w-[490px] h-[48px]"></input>
            <input type="text" id="name" name="email" value="" placeholder="E-mail" class="border rounded-md pl-3 text-[16px] font-sans w-[490px] h-[48px]"></input>
            <input type="text" id="name" name="email" value="" placeholder="Confirmar E-mail" class="border rounded-md pl-3 text-[16px] font-sans w-[490px] h-[48px]"></input>
            <input type="text" id="name" name="senha" value="" placeholder="Senha" class="border rounded-md pl-3 text-[16px] font-sans w-[490px] h-[48px] bg-[url('https://cdn-icons-png.flaticon.com/512/829/829117.png')] bg-no-repeat bg-[length:20px_20px] bg-[calc(100%-10px)]"></input>
            <input type="text" id="name" name="conf-senha" value="" placeholder="Confirmar Senha " class="border rounded-md pl-3 text-[16px] font-sans w-[490px] h-[48px] bg-[url('https://cdn-icons-png.flaticon.com/512/829/829117.png')] bg-no-repeat bg-[length:20px_20px] bg-[calc(100%-10px)]"></input>
          </div>

          <div id="termos" class="h-16 pt-3 flex ">
            <input type="checkbox" /><p class="flex text-[14px] align-middle pl-4 pt-4 text-left text-[#979797]">Eu li e aceito a política de privacidade do sistema, concordando em compartilhar meus dados conforme descrito nos termos estabelecidos. </p>
          </div>

          <div id="input" class="pt-9">
          <div className={inter.className}>
            <button class="rounded-md w-[496px] h-[45px] bg-lightGray font-sans text-[#979797] ">Cadastre-se</button>
          </div>
          </div>
        </div>
        <div class="flex pt-3 items-center justify-center">
          <p className="text-center">Já possui uma conta?</p><a href="../login" class="pl-2 text-green font-sans font-bold">Fazer Login</a>
        </div>
      </div>
    </div>
  )
}

export default Cadastro