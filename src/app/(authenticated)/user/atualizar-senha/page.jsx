import Header from "@/components/Header"
import InputSenha from "@/components/InputSenha"

const atualizarSenha = () => {
    return (
        <>
            <Header title="Atualizar Senha" avatar="https://avatars.githubusercontent.com/u/102611166?s=70&v=4" />
            <div className="flex justify-center items-center m-auto">
                <div className="bg-white w-[1536px] h-[668px] flex justify-center items-center rounded-2xl">
                    <div className="flex flex-col w-[500px] h-[377px] gap-1">
                        <h1 className="text-3xl font-bold text-secondary-500 mb-8">Atualizar senha</h1>
                        <InputSenha placeholder="Senha atual"/>
                        <InputSenha placeholder="Nova senha" />
                        <InputSenha placeholder="Confirmar nova senha" />
                        <button className='mb-3 bg-secondary-500 rounded text-white h-[45px] text-base font-bold'>Enviar</button>
                    </div>
                </div>
            </div>


        </>

    )
}

export default atualizarSenha