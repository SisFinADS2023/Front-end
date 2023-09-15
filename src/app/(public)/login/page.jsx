import Link from "next/link"

const Login = () => {
  return (
    <div>
        <form>
            <h1>
                Acesse sua Conta
            </h1>
            <div>
                <label>Email</label>
                <input type="text"/>
            </div>

            <div>
                <label>Senha</label>
                <input type="password"/>
            </div>
            
            

            <Link href="/"> Voltar</Link>
            <Link href="user/dashboards"> <button>Entrar</button> </Link>

        </form>
    </div>
  )
}

export default Login