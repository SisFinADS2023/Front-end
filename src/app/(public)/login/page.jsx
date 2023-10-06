import Link from "next/link"
import Image from 'next/image'

const Login = () => {
    return (
        <div id="cadastro-area" className="flex flex-col flex-1 justify-center items-center">
            <div className='flex flex-col w-1/3 gap-4'>
                <h2 className="text-3xl	 font-bold text-title mb-5">Acesse sua conta</h2>
                <input className="block mb-5 border-solid border-2 border-gray-900 border-opacity-10 text-cinzaClaro pl-2 font-normal text-base h-11 rounded-md" type="text" name='E-mail' placeholder="E-mail"></input>
                <input className="mb-5 border-solid border-2 border-gray-900 border-opacity-10 text-cinzaClaro px-2 font-normal text-base h-11 rounded-md bg-[url(https://cdn-icons-png.flaticon.com/512/829/829117.png)] bg-no-repeat bg-[length:20px_20px] bg-[calc(100%-10px)]" type="text" name='Senha' placeholder="Senha"></input>


                <p className='text-sm font-semibold text-azulSecundario'><a href='#'>Esqueceu a senha? ➜</a></p>
                <button className='bg-secondary-500 rounded text-white h-[35px]'>Entrar</button>
                <p className='flex justify-start mt-5 text-sm'>Não possui uma conta? <a href='../cadastro' className="text-primary-500 font-bold ml-1">Cadastre-se agora.</a></p>

                <div id="politica-privacidade" className='flex flex-col justify-center items-center gap-2 mt-10'>
                    <h5 className='text-[10px] text-[#979797]'><a href='#'>Políticas de Privacidade</a></h5>
                    <p className='text-[10px] text-[#979797]'>Direitos autorais © 2023 XXXX. Todos os direitos reservados.</p>
                </div>

            </div>
        </div>
    )
}

export default Login