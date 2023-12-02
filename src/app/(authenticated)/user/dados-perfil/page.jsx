'use client'

import { useState } from "react"
import Header from "@/components/Header"
import {Hind, Inter} from 'next/font/google'

const hind = Hind(
  {
      weight: '500',
      subsets: ['latin'],
  }
)

const inter = Inter(
  {
    weight: '600',
    subsets: ['latin']
  }
)


const Dados = () => {

  const [isClicked, setClicked] = useState(false)

  const buttonClicked = () => {
    
    console.log(isClicked)
    setClicked(!isClicked)
  }

    return (
      
      <>
        <Header title="Dados do perfil" avatar="https://avatars.githubusercontent.com/u/102611166?s=70&v=4"/> 
        <div id="frame" className=" flex flex-col justify-center items-center">
            <div id="avatar-name" className="flex justify-start h-32 w-[1536px] bg-white rounded-t-[20px] mt-7 drop-shadow-md">
            <div className="flex rounded-full bg-secondary-500 w-[100px] h-[100px] mt-3.5 ml-[25px] ">

            </div>
            <div className="flex my-auto ml-[25px]">
            <div className={hind.className}>
                <h1 className="text-5xl font-bold text-secondary-500">Nome de usuário</h1>
            </div>
            </div>
            </div> 
            <div id="form" className="flex h-[669px] w-[1536px] bg-white justify-center rounded-b-[20px] mt-7 drop-shadow-md">
            <form>
                <div id="cadastro-body" className="w-[592px] mt-24">
                  <div id="input" className="pt-9 w-[152px] h-[100px] ml-[440px] mb-[35px]">
                  <div className={inter.className}>
                    <button onClick={buttonClicked} id="button-editar" className=" rounded-md w-[152px] h-[40px] border-solid border-2 border-secondary-500 font-sans text-secondary-500">Editar Perfil</button>
                  </div>
                  </div>
                  <div id="form-content" className="flex flex-col space-y-6 pt-6">
                    <input type="text" disabled  name="name" placeholder="Nome" className=" border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
                    <input type="text" disabled  name="lastName" placeholder="Sobrenome" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
                    <input type="text" disabled name="email" placeholder="E-mail" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
                    <div className="h-[126px]">
                    </div>
                  </div>
                </div>
                </form>
            </div>   
        </div>
      </>
    )
  }

  export default Dados