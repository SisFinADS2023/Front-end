'use client'

import { useState } from 'react'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from "next/navigation";
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
    const pathname = usePathname();
    return (
        <Link href={href} className={`flex items-center rounded-md w-full py-4 px-2 ${(className || "")} ${pathname === href ? 'bg-logo text-black' : 'hover:text-yellow-400'}`}>
            <Icon size={20} className="ml-2" />
            <span className="ml-6 flex-1 text-base">{text}</span>
        </Link>
    )
}

const MenuLinkGroup = ({ Icon, href, text, children }) => {
    const [dropDownOn, setDropDownOn] = useState(false)

    const dropDown = () => {
        setDropDownOn(!dropDownOn)
    }

    const pathname = usePathname();

    return (
        <div>
            <div onClick={dropDown} className={`flex items-center rounded-md pr-2 ${pathname === href ? 'bg-logo text-black' : 'hover:text-yellow-400'}`}>
                <MenuLink className="my-0" Icon={Icon} href={href} text={text} />
                {
                    dropDownOn
                        ? <ArrowUp2 size={18} className="cursor-pointer" />
                        : <ArrowDown2 size={18} className="cursor-pointer" />
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

        <div className='relative w-80 min-h-screen p-4 bg-white border-r-[1px]'>
            <div className={roboto.className}>
                <div className='mx-6'>

                    <header>
                        <Logo src="../logo.svg" alt="Logo with Conic" />
                    </header>

                    <nav className='mb-16 flex flex-col gap-y-3'>
                        <MenuLink Icon={Category} href="/user/dashboard" text="Dashboard" />
                        <MenuLink Icon={Card} href="/user/contas" text="Contas" />
                        <MenuLinkGroup Icon={ArrangeHorizontal} href="/user/transacoes" text="Transações">
                            <MenuLink Icon={CardSend} href="/user/transacoes/receitas" text="Receitas" />
                            <MenuLink Icon={CardReceive} href="/user/transacoes/despesas" text="Despesas" />
                        </MenuLinkGroup>
                        <MenuLink Icon={TickCircle} href="/user/planejamento" text="Planejamento" />
                        <MenuLink Icon={EmptyWallet} href="/user/carteira" text="Carteira" />
                        <MenuLink Icon={DocumentDownload} href="/user/relatorios" text="Relatórios" />
                        <MenuLink Icon={Star1} href="/user/metas" text="Metas" />
                        <span className="flex border-b h-0.5 bg-gray-100 w-56 my-3"></span>
                        <MenuLink Icon={Setting} href="/user/configuracoes" text="Configurações" />
                    </nav>

                    <footer className="flex absolute text-zinc-400 bottom-3 w-60">
                        <MenuLink Icon={MessageQuestion} href="/user/central-ajuda" text="Central de ajuda" />
                    </footer>

                </div>
            </div>

        </div>

    )
}

export default SideMenu