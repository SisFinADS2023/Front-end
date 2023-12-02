import CartaoCard from "@/components/ContaAndCards/CartaoCards/CartaoCard"
import CartaoCardAdd from "@/components/ContaAndCards/CartaoCards/CartaoCardAdd"

import ListBankAccounts from "@/components/ContaAndCards/Utils/ListBankAccounts"

const Contas = () => {

  return (
    <>
      
      <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
        <ListBankAccounts />

      </div>
      <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
        <CartaoCard title="Título" color="#006CC3" hidden="R$25,99" deb='D' num='XXXX XXXX XXXX XXXX' />
        <CartaoCard title="Título2" color="#F76C4C" hidden="R$109,98" deb='C' num='XXXX XXXX XXXX XXXX' />
        <CartaoCardAdd />
      </div>

    </>
  )
}

export default Contas