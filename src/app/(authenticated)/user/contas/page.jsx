import Header from "@/components/Header"
import ContaCard from "@/components/ContaAndCards/ContaCards/ContaCard"
import ContaCardAdd from "@/components/ContaAndCards/ContaCards/ContaCardAdd"
import CartaoCard from "@/components/ContaAndCards/CartaoCards/CartaoCard"
import CartaoCardAdd from "@/components/ContaAndCards/CartaoCards/CartaoCardAdd"



const Contas = () => {



  return (

    <>
    <div className="m-10 mb-[-25px]">
      <div className="border-l-[6px] border-l-primary-800 h-10 mb-5">
        <h3 className="flex ml-4 text-3xl font-bold text-primary-800">Contas</h3>
      </div>
      </div>
    <div style={{ display: "inline-flex", flexWrap: "wrap" }} className="m-[-15px]">
        <ContaCard title="Título" color="#006CC3" hidden="R$25,99" />
        <ContaCard title="Título2" color="#F76C4C" hidden="R$109,98" />
        
        <ContaCardAdd />

      </div>
    <div className="m-10 mb-[-25px] pt-5">
    <div className="border-l-[6px] border-l-primary-800 h-10 mb-5">
      <h3 className="flex ml-4 text-3xl font-bold text-primary-800">Cartões</h3>
    </div>
    </div>
      <div style={{ display: "inline-flex", flexWrap: "wrap" }} className="m-[-15px]">
        <CartaoCard title="Título" color="#006CC3" hidden="R$25,99" deb='D' num='XXXX XXXX XXXX XXXX' />
        <CartaoCard title="Título2" color="#F76C4C" hidden="R$109,98" deb='C' num='XXXX XXXX XXXX XXXX' />
        <CartaoCardAdd />
      </div>

    </>
  )
}

export default Contas