'use client'
import React from 'react'
import {League_Spartan} from 'next/font/google'
import { Inter } from 'next/font/google'
import {useState} from 'react'


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

const Cadastro = () => {


  return (
    <>
    
    <div className="flex justify-center items-center w-[1210px]">

      <div id="cadastro-card" className="flex flex-col h-auto w-[496px] justify-center">
        <div id="cadastro-title" className="h-14 ">
          <div className={league_Spartan.className}>
          <h2 className="font-sans text-3xl league_Spartan">Crie sua conta</h2>
          </div>
        </div>

      <form>
        <div id="cadastro-body" className="w-auto">
          <div id="nome-sobrenome" className="flex flex space-x-4 ">
            <input type="text" name="nome" placeholder="Nome" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10 "></input>
            <input type="text" name="sobrenome" placeholder="Sobrenome" className="border-2 text-[#A2A3A4] px-2 font-normal text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input> 
          </div>

          <div id="form-content" className="flex flex-col space-y-6 pt-6">
            <input type="text" name="email" placeholder="E-mail" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
            <input type="text" name="email" placeholder="Confirmar E-mail" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
            <div className="h-[126px]">
            <InputSenha/>
            <InputConfSenha/>
            </div>
          </div>
       

          <div id="termos" className="h-16 pt-3 flex ">
            <input type="checkbox"/><p className="flex text-[14px] align-middle pl-4 pt-4 text-left text-[#979797]">Eu li e aceito a política de privacidade do sistema, concordando em compartilhar meus dados conforme descrito nos termos estabelecidos. </p>
          </div>

          <div id="input" className="pt-9">
          <div className={inter.className}>
            <button id="buttonSignUp"  type="form" className="rounded-md w-[496px] h-[45px] bg-lightGray font-sans text-[#979797]" >Cadastre-se</button>
          </div>
          </div>
        </div>
      </form>

        <div className="flex pt-3 items-center justify-center">
          <p className="text-center">Já possui uma conta?</p><a href="../login" className="pl-2 text-green font-sans font-bold">Fazer Login</a>
        </div>
      </div>
  
    </div>
    </>
  )
}

export default Cadastro