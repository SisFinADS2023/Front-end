import { useState } from "react";
import Button from "./Button";
import Image from 'next/image'

export default function ModalCookie() {

    const [cookie, setCookie] = useState('flex')

    const aceitarCookies = () => {

        if (cookie === 'flex') {
            setCookie('hidden');
            const modal = document.querySelector('.modal-cookie');
            modal.classList.add('hidden');
        }
    }

    return (
            <div className={`modal-cookie w-[97%] h-auto bg-tertiary-50 fixed bottom-10 rounded-3xl ml-6 px-10 z-50 gap-5 items-center s ${cookie} shadow-xl`}>
                <div className="py-8 flex flex-col gap-3">
                    <div className="flex gap-2">
                        <h2 className="font-semibold text-xl">Mas antes, vamos falar dos cookies </h2>
                        <Image src="../two-cookies.svg" width={40} height={40}  alt="" />
                    </div>
                    <div>
                        <p className="font-normal text-base text-secondary-300">Utilizamos cookies essenciais para o funcionamento do Coinc. Além disso, gostaríamos de empregar outros cookies para aprimorar e personalizar a sua experiência, selecionar de forma mais precisa os anúncios do Coinc que você vê em nosso site e em sites parceiros, bem como analisar o desempenho do nosso website. No entanto, faremos isso apenas se você nos conceder permissão. Para obter mais informações sobre as suas opções, consulte a <u className="font-semibold text-black"> nossa política de cookies.</u> </p>
                    </div>
                </div>
                <div className="w-4/12 flex flex-col gap-4 ">
                    <Button onClick={() => setCookie('hidden')} className="bg-primary-500 text-secondary-500 py-1 px-4 " >Aceitar todos os cookies</Button>
                    <Button className="bg-[#E8EEF4] py-1 px-4">Gerir cookies</Button>
                </div>
            </div>
    )
}