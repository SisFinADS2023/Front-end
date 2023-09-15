import Link from "next/link"

const Cadastro = () => {
    return (
      <div>
          <form>
              <h1>
                  Crie sua Conta
              </h1>
              <div>
                  <label>Email</label>
                  <input type="text"/>
              </div>
  
              <div>
                  <label>Senha</label>
                  <input type="password"/>
              </div>

              <div>
                  <label>CPF</label>
                  <input type="text"/>
              </div>
              
              <button>Criar</button>

              <Link href="/"> Voltar</Link>
  
          </form>
      </div>
    )
  }
  
  export default Cadastro