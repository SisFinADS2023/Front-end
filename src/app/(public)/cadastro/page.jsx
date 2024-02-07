'use client'

import React, { useState } from 'react'
import { League_Spartan } from 'next/font/google'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeSlash } from 'iconsax-react'


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
  })

const Cadastro = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [passwordIsVisible, setPasswordVisible] = useState(false);
  const [confPasswordIsVisible, setConfPasswordVisible] = useState(false);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [confEmail, setConfEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const router = useRouter()

  const submitRegister = async () => {
    if(isChecked){
      const newUser = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password,
    }
    
    const response = await fetch(`https://coinc-backend.onrender.com/user/`,
    {
        cache: 'no-store',
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    }
    )

    if(response.ok){
        const result = await response.json()
        console.log(result)
        router.push('./login');
    }else{
        alert('Confira os campos e tente novamente.')
    }
    }

}
const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
  console.log(isChecked)
};

const checkConfPasswordIsVisible = () => {
  setConfPasswordVisible(!confPasswordIsVisible)
}
  const checkPasswordIsVisible = () => {
  setPasswordVisible(!passwordIsVisible)
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

          <form>
            <div className="w-auto">
              <div className="flex space-x-4 ">
                <input onChange={e => setFirstname(e.target.value)} id="firstName" type="text" name="nome" placeholder="Nome" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10 "></input>
                <input onChange={e => setLastname(e.target.value)} id="lastName" type="text" name="sobrenome" placeholder="Sobrenome" className="border-2 text-[#A2A3A4] px-2 font-normal text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
              </div>

              <div className="flex flex-col space-y-6 pt-6">
                <input onChange={e => setEmail(e.target.value)} id="email" type="text" name="email" placeholder="E-mail" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
                <input onChange={e => {setConfEmail(e.target.value)}} id="confEmail" type="text" name="Confemail" placeholder="Confirmar E-mail" className="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
                <div className="h-[126px]">
                <div className="relative">
                    <input id="passwordRegister" className={`mb-6 border-solid border-2 border-gray-900 border-opacity-10 text-[#A2A3A4] px-2 font-normal text-base h-[48px] rounded w-[100%]`}
                        type={passwordIsVisible ? "text" : "password"} name='Senha' placeholder={'Insira sua senha'} onChange={e => setPassword(e.target.value)}></input>
                    {
                        passwordIsVisible
                            ? <EyeSlash size={20} onClick={checkPasswordIsVisible} className="absolute cursor-pointer top-[15px] right-[11px] text-[#A2A3A4]" />
                            : <Eye size={20} onClick={checkPasswordIsVisible} className="absolute cursor-pointer top-[15px] right-[11px] text-[#A2A3A4]" />
                    }

                    <input id="passwordConfirmRegister" className={`mb-6 border-solid border-2 border-gray-900 border-opacity-10 text-[#A2A3A4] px-2 font-normal text-base h-[48px] rounded w-[100%]`}
                        type={confPasswordIsVisible ? "text" : "password"} name='ConfirmeSenha' placeholder={'Confirme sua senha'} onChange={e => setConfPassword(e.target.value)}></input>
                    {
                        confPasswordIsVisible
                            ? <EyeSlash size={20} onClick={checkConfPasswordIsVisible} className="absolute cursor-pointer top-[88px] right-[11px] text-[#A2A3A4]" />
                            : <Eye size={20} onClick={checkConfPasswordIsVisible} className="absolute cursor-pointer top-[88px] right-[11px] text-[#A2A3A4]" />
                    }
                </div>  
                </div>
              </div>
              <div className="h-16 pt-3 flex ">
                <input checked={isChecked} onChange={handleCheckboxChange} type="checkbox" /><p className="flex text-[14px] align-middle pl-4 pt-4 text-left text-[#979797]">Eu li e aceito a política de privacidade do sistema, concordando em compartilhar meus dados conforme descrito nos termos estabelecidos. </p>
              </div>

              <div className="pt-9">
                <div className={inter.className}>
                <Link className='mb-3 text-center bg-secondary-500 rounded text-white h-[45px] text-base font-bold' onClick={submitRegister} href={'#'}>
                  <button type="submit" className="rounded-md w-[496px] h-[45px] bg-secondary-500 font-sans text-white" >Cadastre-se</button>
                </Link>
                
    
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
