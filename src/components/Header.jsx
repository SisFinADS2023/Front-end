'use client'

import { League_Spartan } from 'next/font/google'
import {
    Notification,
    ArrowDown2,
    ArrowUp2,
    Logout,
    PasswordCheck,
    Profile
} from 'iconsax-react'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation"



const league_Spartan = League_Spartan(
    {
        weight: '400',
        subsets: ['latin'],
    }
)

const Avatar = ({ name, color }) => {

    const initials = name.split(' ')
        .filter((s, i, a) => i == 0 || i == a.length - 1)
        .map(s => s.charAt(0).toUpperCase())
        .reduce((a, s) => a + s, '');


    return (
        <>
            <div className={`flex pt-1 items-center justify-center w-10 h-10 rounded-full text-base ${color} text-white`}>
                {initials}
            </div>
        </>
    )
}


const UserModal = ({ userModal }) => {
    return (
        <>
            <div className="absolute top-[75px] right-5 bg-white w-2/12 rounded-md shadow-md z-10">
                <ul className="flex flex-col">
                    {userModal.map((userModal, index) => (
                        <li key={index}>
                            <Link href={userModal.path} className="flex pl-10 gap-5 py-4">
                                {userModal.icon}
                                {userModal.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const MessageNotification = ({ title, message, path }) => {
    return (
        <>
            <Link href={path}>
                <ul>
                    <li className="border-y-1 overflow-hidden">
                        <h1 className="font-bold text-xl text-center text-secondary-500 pt-2">
                            {title}
                        </h1>
                        <p className="text-md text-left text-secondary-200 pl-3">
                            {message}
                        </p>
                        <span className="flex border-t border-secondary-200 mt-4 w-full h-[1px]"></span>
                    </li>
                </ul>
            </Link>
        </>
    )
}

const NotificationModal = () => {
    return (
        <>
            <div className="absolute top-[75px] right-32 bg-white w-2/12 mr-9 h-2/3 p-3 px-6 rounded-md shadow-md z-10">
                <MessageNotification title={"Limite próximo de ser alcançado:"} message={"Seu limite está proximo do limite estabelecido, é hora de economizar!"} path={"#"} />
                <MessageNotification title={"Limite alcançado:"} message={"Seu limite chegou ao fim, é hora de trabalhar!"} path={"#"} />
            </div>
        </>
    )
}

const HeaderName = () => {
    let pathName = []
    pathName = usePathname().split('/')
    let lastName = pathName[pathName.length - 1]

    switch (lastName) {
        case 'dashboard':
            lastName = 'dashboard'
            break;
        case 'contas':
            lastName = 'contas'
            break;
        case 'transacoes':
            lastName = "transações"
            break;
        case 'receitas':
            lastName = 'receitas'
            break;
        case 'despesas':
            lastName = 'despesas'
            break
        case 'planejamento':
            lastName = 'planejamento'
            break;
        case 'carteira':
            lastName = 'carteira'
            break;
        case 'relatorios' :
            lastName = 'relatórios'
            break;
        case 'metas' :
            lastName = 'metas'
            break;
        case 'configuracoes' :
            lastName = 'configurações'
            break;
        case 'central-ajuda' :
            lastName = 'Central de ajuda'
    }

    return lastName

}


const Header = ({ name, color }) => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleNotification, setToggleNotification] = useState(false)

    

    return (
        <div className={league_Spartan.className}>

            <div className="w-auto bg-white h-[80px] flex justify-between select-none">

                <div className="text-3xl flex my-auto ml-8 font-bold text-secondary-500 uppercase">
                    <h4>{HeaderName()}</h4>
                </div>

                <div className="flex items-center gap-4">

                    <div className="flex cursor-pointer">
                        <Notification size={20} onClick={() => {
                            setToggleNotification(!toggleNotification)
                            toggleMenu ? setToggleMenu(false) : ""
                        }

                        }
                        />
                    </div>
                    {
                        toggleNotification &&
                        <NotificationModal />

                    }

                    <div onClick={() => {
                        setToggleMenu(!toggleMenu)
                        toggleNotification ? setToggleNotification(false) : ""
                    }
                    }

                        className="flex items-center gap-4 w-auto">
                        <div className="flex cursor-pointer w-auto items-center gap-3 px-4">
                            <Avatar name={name} color={color} />
                            <h4 className="text-[16px] text-secondary-500">{name}</h4>
                        </div>
                        <span className="mr-[58px] cursor-pointer">
                            {
                                toggleMenu ? <ArrowUp2 size={18} /> : <ArrowDown2 size={18} />
                            }
                        </span>

                        <div className="flex flex-col">
                            {
                                toggleMenu &&

                                <UserModal
                                    userModal={
                                        [
                                            {
                                                "path": "/user",
                                                "icon": <Profile />,
                                                "title": "Dados do Perfil"
                                            },

                                            {
                                                "path": "/user",
                                                "icon": <PasswordCheck />,
                                                "title": "Atualizar Senha"
                                            },

                                            {
                                                "path": "/login",
                                                "icon": <Logout />,
                                                "title": "Logout"
                                            }
                                        ]
                                    }
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header