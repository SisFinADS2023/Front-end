'use client'

import { useEffect, useState } from "react"
import {Hind, Inter} from 'next/font/google'
import { useRouter } from "next/navigation"
import { jwtDecode } from "jwt-decode"

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

  const router = useRouter();
  const [isClicked, setClicked] = useState(false)
  const [initials, setInitials] = useState(null)
  const [userName, setUserName] = useState(null)

  useEffect(() => {
      const userCompleteName = async () => {
          try{
          if(localStorage.getItem('actk') != null){
              const tokensJson = JSON.parse(localStorage.getItem('actk'));
              const token = tokensJson.access_token;
              
              const decoded = jwtDecode(token);
      
              const user = await fetch(`https://coinc-backend-8d1196b671ee.herokuapp.com/user/${decoded.userId}`,
              {
                  cache: 'no-store',
                  method: 'GET',
                  headers: {
                  "Content-Type": "application/json",
                  }
              }
              )
              const response =  await user.json();
              const name =  response.firstName + " " + response.lastName
              setUserName(name);
              const initials = name.split(' ')
                  .filter((s, i, a) => i == 0 || i == a.length - 1)
                  .map(s => s.charAt(0).toUpperCase())
                  .reduce((a, s) => a + s, '');
      
              setInitials(initials);
          }else{
              router.push('../login');
          }
      } catch(e){
        router.push('../login');
      }
      }
          userCompleteName();
      },[]);

  const buttonClicked = () => {
    setClicked(!isClicked)
  }

    return (
      
      <>
        <div id="frame" className=" flex flex-col justify-center items-center">
            <div id="avatar-name" className="flex justify-start h-24 w-[1536px] bg-white rounded-xl mt-7 shadow-shadowSuave">
            <div className="flex rounded-full bg-gray-500 w-[75px] h-[75px] mt-2.5 ml-[25px] ">
            <div className={`flex pt-8 pl-8 items-center justify-center w-10 h-10 rounded-full text-2xl  text-white`}>
                {initials}
            </div>
            </div>
            <div className="flex my-auto ml-[25px]">
            <div className={hind.className}>
                <h1 className="text-4xl text-secondary-500">{userName}</h1>
            </div>
            </div>
            </div> 
            <div id="form" className="flex h-[669px] w-[1536px] bg-white justify-center rounded-xl mt-5 shadow-shadowSuave">
            <form>
                <div id="cadastro-body" className="w-[592px] mt-24">
                  <div id="input" className="pt-9 w-[152px] h-[100px] ml-[440px] mb-[35px]">
                  <label className="relative inline-flex items-center cursor-pointer right-[440px] top-10">
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:after:bg-black after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900">Notificações</span>
                  </label>
                  <div className={inter.className}>
                    <button onClick={buttonClicked} id="button-editar" className=" rounded-md w-[152px] h-[40px] border-solid border-2 border-secondary-500 font-sans text-secondary-500">Editar Perfil</button>
                  </div>
                  </div>
                  <div id="form-content" className="flex flex-col space-y-6 pt-6">
                    <input type="text" name="name" placeholder="Nome" className=" border-2 text-slate-950 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
                    <input type="text" name="lastName" placeholder="Sobrenome" className="border-2 text-slate-950 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
                    <input type="text" name="email" placeholder="E-mail" className="border-2 text-slate-950 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"></input>
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