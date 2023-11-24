'use client'

import { League_Spartan, Hind } from 'next/font/google'
import { Notification, ArrowDown2 } from 'iconsax-react'
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


                <div className="text-[40px] flex my-auto ml-[164px]">
                    <h4 className="text-title">{title}</h4>
                </div>


                <div className="flex w-[256px] h-[41px] justify-center items-center gap-[16px]">
                    <Notification size={24} />
                    <div className=" flex w-[180px] my-auto justify-center items-center gap-[10px]">
                        <img className="w-[42px] h-[40px] rounded-full" src={avatar} alt="" />
                        <p className="text-base font-normal text-secondary-500">Maria Lurdes</p>
                        <ArrowDown2 size={16} onClick={() => setModalSignInIsOpen(!modalSignInIsOpen)} />
                    </div>
                </div>
            </div>

            <Modal isOpen={modalSignInIsOpen} changeOpen={setModalSignInIsOpen}>
                <p>Dados de perfil</p>
                <p>Atualizar Senha</p>
                <p>Sair</p>
            </Modal>
        </div>
    )
}


export default Header
