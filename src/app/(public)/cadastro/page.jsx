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

const ButtonHandle  = () => {
    document.getElementById("buttonSignUp").disabled = true;

    document.getElementById("input[type='checkbox']").addEventListener("input[type='checkbox']", function(event){

      //busca conteúdo do input
        var conteudo = document.getElementById("input[type='checkbox']").value;
    
        //valida conteudo do input 
        if (conteudo !== null && conteudo !== '') {
          //habilita o botão
          document.getElementById("buttonSignUp").disabled = false;
        } else {
          //desabilita o botão se o conteúdo do input ficar em branco
          document.getElementById("buttonSignUp").disabled = true;
        }
    });

}


const Cadastro = () => {



  return (
    <>
    
    <div class="flex justify-center items-center w-[1210px]">
      <div id="cadastro-card" class="flex flex-col h-auto w-[496px] justify-center">
        <div id="cadastro-title" class="h-14 ">
          <div className={league_Spartan.className}>
          <h2 class="font-sans text-3xl league_Spartan">Crie sua conta</h2>
          </div>
        </div>
        <div id="cadastro-body" class="w-auto">
          <div id="nome-sobrenome" class="flex flex space-x-4 ">
            <input type="text" id="name" name="name" value="" placeholder="Nome" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10 "></input>
            <input type="text" id="name" name="sobrenome" value="" placeholder="Sobrenome" class="border-2 text-[#A2A3A4] px-2 font-normal text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input> 
          </div>

          <div id="form-content" class="flex flex-col space-y-6 pt-6">
            <input type="text" id="name" name="cpf" value="" placeholder="Username" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
            <input type="text" id="name" name="email" value="" placeholder="E-mail" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
            <input type="text" id="name" name="email" value="" placeholder="Confirmar E-mail" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
            <div className="h-[126px]">
            <InputSenha/>
            <InputConfSenha/>
            </div>
          </div>

          <div id="termos" class="h-16 pt-3 flex ">
            <input type="checkbox" /><p class="flex text-[14px] align-middle pl-4 pt-4 text-left text-[#979797]">Eu li e aceito a política de privacidade do sistema, concordando em compartilhar meus dados conforme descrito nos termos estabelecidos. </p>
          </div>

          <div id="input" class="pt-9">
          <div className={inter.className}>
            <button id="buttonSignUp"  className="rounded-md w-[496px] h-[45px] bg-lightGray font-sans text-[#979797] ">Cadastre-se</button>
          </div>
          </div>
        </div>
        <div class="flex pt-3 items-center justify-center">
          <p className="text-center">Já possui uma conta?</p><a href="../login" class="pl-2 text-green font-sans font-bold">Fazer Login</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cadastro