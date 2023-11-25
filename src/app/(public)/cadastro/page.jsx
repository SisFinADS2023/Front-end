'use client'

import React from 'react'
import { League_Spartan } from 'next/font/google'
import { Inter } from 'next/font/google'
import InputSenha from '@/components/InputSenha'
import { useRegisterStore } from '../../../Utils/Stores/userStore'
import Link from 'next/link'
import { handleChange } from '@/Utils/Handles/Register/handleChange'

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

  const { registerUser, setRegisterUser, isChecked, setIsChecked } = useRegisterStore()
  const url = "https://cgtnvhork6.execute-api.us-east-1.amazonaws.com/"


  function areAllValuesFilled(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && (obj[key] === "" || !isChecked)) {
        return false;
      }
    }
    return true;
  }

  function compareValues(obj, prop1, prop2) {
    if (obj.hasOwnProperty(prop1) && obj.hasOwnProperty(prop2)) {
      return obj[prop1] === obj[prop2];
    } else {
      return false;
    }
  }



  const handleInputChange = (e, prop) => {
    handleChange(e, prop, setRegisterUser)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("USER FORM: " + JSON.stringify(registerUser))
    console.log("AA: "+registerUser.confPassword)

    if (registerUser.confPassword === registerUser.password && registerUser.confEmail === registerUser.email) {
      const userRegistrationWithoutConfirmation = { ...registerUser }
      delete userRegistrationWithoutConfirmation.confEmail
      delete userRegistrationWithoutConfirmation.confPassword
      console.log("Novo: Array: "+userRegistrationWithoutConfirmation)

      try {
        const response = await fetch(`${url}dev/ms-users`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRegistrationWithoutConfirmation),
          }
        )
  
        if (response.ok) {
          window.alert("Usuário criado com sucesso")
        }
  
        if (!response.ok) {
          const error = await response.json()
          console.error(error.message)
          throw new Error('Erro ao enviar a requisição')
        }
  
        const data = await response.json();
        console.log('Resposta da API:', data);
  
      } catch (error) {
        console.error(error.message)
      }
    } else {
      console.log("CAIU AQUI")
    }




  }

  return (
    <>

      <div className="flex justify-center items-center w-[1210px]">

        <div className="flex flex-col h-auto w-[496px] justify-center">
          <div className="h-14 ">
            <div className={league_Spartan.className}>
              <h2 className="font-sans text-3xl league_Spartan">Crie sua conta</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-auto">
              <div className="flex space-x-4 ">
                <input onChange={(e) => handleInputChange(e, 'name')} type="text" name="nome" placeholder="Nome" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10 "></input>
                <input onChange={(e) => handleInputChange(e, 'lastName')} type="text" name="sobrenome" placeholder="Sobrenome" className="border-2 text-[#A2A3A4] px-2 font-normal text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
              </div>

              <div className="flex flex-col space-y-6 pt-6">
                <input onChange={(e) => handleInputChange(e, 'email')} type="text" name="email" placeholder="E-mail" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
                <input onChange={(e) => handleInputChange(e, 'confEmail')} type="text" name="Confemail" placeholder="Confirmar E-mail" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
                <div className="h-[126px]">
                  <InputSenha onChange={(e) => handleInputChange(e, 'password')} />
                  <InputSenha onChange={(e) => handleInputChange(e, 'confPassword')} />
                </div>
              </div>

              <div className="h-16 pt-3 flex ">
                <input onChange={() => setIsChecked(!isChecked)} type="checkbox" /><p className="flex text-[14px] align-middle pl-4 pt-4 text-left text-[#979797]">Eu li e aceito a política de privacidade do sistema, concordando em compartilhar meus dados conforme descrito nos termos estabelecidos. </p>
              </div>

              <div className="pt-9">
                <div className={inter.className}>

                  {
                    areAllValuesFilled(registerUser) ?

                      <button type="submit" className="rounded-md w-[496px] h-[45px] bg-secondary-500 font-sans text-white" >Cadastre-se</button>
                      :
                      <button disabled type="submit" className="rounded-md w-[496px] h-[45px] bg-lightGray font-sans text-[#979797]" >Cadastre-se</button>
                  }

                </div>
              </div>
            </div>
          </form>

          <div className="flex pt-3 items-center justify-center">
            <label className="text-center">Já possui uma conta?</label>

            <Link href={'/login'}>
              <p className="pl-2 text-green font-sans font-bold">Fazer Login</p>
            </Link>

          </div>
        </div>

      </div>
    </>
  )
}

export default Cadastro