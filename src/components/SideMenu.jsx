'use client'


import { useState } from 'react'
import {Roboto}from 'next/font/google'
import Link from 'next/link'
import {
    Category,
    Card,
    ArrangeHorizontal,
    TickCircle,
    EmptyWallet,
    DocumentDownload,
    Star1,
    Setting,
    ArrowDown2,
    ArrowUp2,
    MessageQuestion,
    CardReceive,
    CardSend

} from 'iconsax-react'

const Logo = ({ src, alt }) => {
    return (
        <div className='mb-10'>
            <img src={src} alt={alt} />
        </div>
    )
}

const MenuLink = ({ Icon, href, text, className }) => {
    return (
        <Link href={href} className={`flex items-center rounded-md w-full p-2 my-6 ${(className || "")}`}>
            <Icon size={20} />
            <span className="ml-6 flex-1 text-base">{text}</span>
        </Link>
    )
}

const MenuLinkGroup = ({ Icon, href, text, children }) => {
    const [dropDownOn, setDropDownOn] = useState(false)

    const dropDown = () => {
        setDropDownOn(!dropDownOn)
    }

    return (
        <div>
            <div onClick={dropDown} className="flex items-center rounded-md border bg-yellow-500 pr-2">
                <MenuLink className="my-0" Icon={Icon} href={href} text={text} />
                {
                    dropDownOn
                        ? <ArrowDown2 size={18} className="ml-12 cursor-pointer" />
                        : <ArrowUp2 size={18} className="ml-12 cursor-pointer" />
                }
            </div>
            <div className={`flex items-start flex-col ml-10 ${dropDownOn ? 'flex' : 'hidden'} `}>
                {children}
            </div>
        </div>
    )
}

const roboto = Roboto(
    {
        weight: '400',
        subsets: ['latin'],
    }
)

const SideMenu = () => {

    const [dropDownOn, setDropDownOn] = useState(false)

    const dropDown = () => {
        setDropDownOn(!dropDownOn)
    }

    return (
        <div className={roboto.className}>

        <div className='flex relative'>
            <div className='relative w-80 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-start ml-10'>

                    <header>
                        <Logo src="../logo.svg" alt="Logo with Conic"/>
                    </header>

                    <nav>
                        <MenuLink Icon={Category} href="/user/dashboards" text="Dashboards" />
                        <MenuLink Icon={Card} href="/user/contas" text="Contas" />
                        <MenuLinkGroup Icon={ArrangeHorizontal} href="/user/transacoes" text="Transações">
                            <MenuLink className="hover:text-yellow-400 mb-0" Icon={CardSend} href="/user/transacoes/receitas" text="Receitas" />
                            <MenuLink className="hover:text-yellow-400 mb-0" Icon={CardReceive} href="/user/transacoes/despesas" text="Despesas" />
                        </MenuLinkGroup>
                        <MenuLink Icon={TickCircle} href="/user/planejamento" text="Planejamento" />
                        <MenuLink Icon={EmptyWallet} href="/user/carteira" text="Carteira" />
                        <MenuLink Icon={DocumentDownload} href="/user/relatorios" text="Relatórios" />
                        <MenuLink Icon={Star1} href="/user/metas" text="Metas" />
                        <span className="flex border-b h-0.5 bg-gray-100 w-56 my-5"></span>
                        <MenuLink Icon={Setting} href="/user/configuracoes" text="Configurações" />
                    </nav>

                    <footer className="flex text-zinc-400 absolute bottom-12">
                        <MenuLink Icon={MessageQuestion} href="/user/central-ajuda" text="Central de ajuda" />
                    </footer>

                </div>
            </div>
        </div>

        </div>

    )
}

export default SideMenu