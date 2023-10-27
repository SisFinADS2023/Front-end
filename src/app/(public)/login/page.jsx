import InputSenha from "@/components/InputSenha"

const Login = () => {
    return (
        <div id="cadastro-area" className="flex flex-col flex-1 justify-center items-center">
            <div className='flex flex-col w-[492px] h-[514.87px] px-0 pt-[53px] pb-[32px]'>
                <h2 className="text-3xl	font-bold text-secondary-500 mb-6">Acesse sua conta</h2>
                <input className="block mb-6 border-solid border-2 border-gray-900 border-opacity-10 text-[#A2A3A4] pl-2 font-normal text-base h-[48px] rounded" type="text" name='E-mail' placeholder="E-mail"></input>
                {/* <input className="mb-6 border-solid border-2 border-gray-900 border-opacity-10 text-[#A2A3A4] px-2 font-normal text-base h-[48px] rounded bg-[url(https://cdn-icons-png.flaticon.com/512/829/829117.png)] bg-no-repeat bg-[length:20px_20px] bg-[calc(100%-10px)]" type="text" name='Senha' placeholder="Senha"></input> */}
                <InputSenha />

                <p className='mb-6 text-base font-semibold text-secondary-500'><a href='../recuperar-senha'>Esqueceu a senha? ➜</a></p>
                <button className='mb-3 bg-secondary-500 rounded text-white h-[45px] text-base font-bold'>Entrar</button>
                <p className='mb-3 flex justify-start text-base font-light text-secondary-500'>Não possui uma conta? <a href='../cadastro' className="text-primary-500 font-semibold ml-1">Cadastre-se agora.</a></p>

                <div id="politica-privacidade" className='flex flex-col justify-center items-center gap-2'>
                    <h5 className='text-[12px] text-[#979797] font-normal'><a href='#'>Políticas de Privacidade</a></h5>
                    <p className='text-[12px] text-[#979797] font-normal'>Direitos autorais © 2023 XXXX. Todos os direitos reservados.</p>
                </div>

            </div>
        </div>
    )
}

export default Login