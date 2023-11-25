'use client'

import { League_Spartan, Hind } from 'next/font/google'
import {
    Notification,
    ArrowDown2,
    ArrowUp2,
    Profile,
    PasswordCheck,
    Logout
} from 'iconsax-react'
import { useState } from "react"
import Modal from "./Modal.jsx"


const league_Spartan = League_Spartan(
    {
        weight: '400',
        subsets: ['latin'],
    }
)


const hind = Hind(
    {
        weight: '400',
        subsets: ['latin'],
    }
)


const Header = ({ title, avatar }) => {

    const [modalSignInIsOpen, setModalSignInIsOpen] = useState(false)


    return (
        <div className={hind.className}>


            <div className="relative w-auto bg-white h-[80px] flex justify-between items-center">


                <div className="text-[40px] flex my-auto ml-8">
                    <h4 className="text-3xl font-bold">{title}</h4>
                </div>


                <div className="flex w-[256px] h-[41px] justify-center items-center gap-[16px]">
                    <Notification size={24} className="cursor-pointer"/>
                    <div className=" flex w-[180px] my-auto justify-center items-center gap-[10px] cursor-pointer" onClick={() => setModalSignInIsOpen(!modalSignInIsOpen)}> 
                        <img className="w-[42px] h-[40px] rounded-full" src={avatar} alt="" />
                        <p className="text-base font-normal text-secondary-500">Maria Lurdes</p>
                        {
                            modalSignInIsOpen
                                ?
                                <ArrowUp2 size={16}  />
                                :
                                <ArrowDown2 size={16} />
                        }

                    </div>
                </div>
            </div>

            <Modal isOpen={modalSignInIsOpen} changeOpen={setModalSignInIsOpen}>

                <div className='flex gap-5 w-[256px] h-[52px] justify-start items-center ml-5 text-secondary-500'>
                    <Profile size={20} onClick={() => { }} />
                    <p className='text-base font-normal	'>Dados de perfil</p>
                </div>

                <div className='flex gap-5 w-[256px] h-[52px] justify-start items-center ml-5 text-secondary-500'>
                    <PasswordCheck size={20} onClick={() => { }} />
                    <p className='text-base font-normal	'>Atualizar Senha</p>
                </div>

                <div className='flex gap-5 w-[256px] h-[52px] justify-start items-center ml-5 text-secondary-500'>
                    <Logout size={20} onClick={() => { }} />
                    <p className='text-base font-normal	'>Sair</p>
                </div>

            </Modal>
        </div>
    )
}


export default Header
