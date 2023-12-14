import React from 'react'


const recuperarSenha = () => {
    return (
        <div id="recuperar-senha-area" className="flex flex-col flex-1 justify-center items-center">
            <div className='flex flex-col w-[504px] h-[300.84px] px-0 pt-[17px] pb-[17px]'>
                <h2 className="text-3xl	font-bold text-secondary-500 mb-6 h-14">Recuperar Senha</h2>
                <input className="block mb-8 border-solid border-2 border-gray-900 border-opacity-10 text-[#A2A3A4] pl-2 font-normal text-base h-[48px] rounded" type="text" name='E-mail' placeholder="E-mail"></input>

                <button className='mb-3 bg-secondary-500 rounded text-white h-[45px] text-base font-semibold'>Enviar</button>

                <div id="politica-privacidade" className='flex flex-col justify-center items-center gap-2'>
                    <h5 className='text-[12px] text-[#979797] font-normal'><a href='#'>Políticas de Privacidade</a></h5>
                    <p className='text-[12px] text-[#979797] font-normal'>Direitos autorais © 2023 XXXX. Todos os direitos reservados.</p>
                </div>

            </div>
        </div>
    )
}

export default recuperarSenha