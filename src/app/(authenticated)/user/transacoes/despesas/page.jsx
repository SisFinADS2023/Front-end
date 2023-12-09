import Header from "@/components/Header"
import { Hind } from "next/font/google"
import { ArrowDown2, Data } from "iconsax-react"

const getData = async () =>{
  const despesas = await fetch('https://jxoxl80c91.execute-api.us-east-1.amazonaws.com/dev/transactions', { cache: 'no-store' })
  const data = await despesas.json()

  console.log(data)
}

const hind500 = Hind({
  weight: '500',
  subsets: ["latin"],
}
) 

  const Linha = ({children}) => {
    return(

        <div className="bg-white w-full h-18 flex scroll-m-0  ">
              <h1 className={`bg-[#132861] w-full h-[2px] ml-3 my-auto flex justify-around ${hind500.className}`}>
                {children}
              </h1>
          </div>
        
    )
  }

  const Scroll = ({children}) => {
    return (
      <div className="bg-white overflow-x-auto w-full h-4 ml-7 flex rounded-xl drop-shadow-xl justify-around my-auto touch-auto bg-scroll"> 
        <h1>  </h1>
      </div>
    )
  }

  const DataTempo = (props) => {
    return(    
        <div className="w-2 h-1 mt-3  ">
          <div className="absolute top-[130px] flex flex-col ">
          <h1 className="text-[20px]">Teste</h1>
          <ArrowDown2 className="mx-auto" size="24" color="green"  />
          </div>
          <h1 className="">
          {props.data}
          </h1>
        </div>
    )
  }

  const ProximoLance = ({children}) => {
    return(
      <div className="bg-slate-50 w-40 h-40 drop-shadow-xl flex flex-col rounded-lg">
        <h1 className={`text-[##00032F] text-center flex justify-around text-sm ${hind500.className}`}>Próximo lance </h1>
      <p className={`text-[##00032F] text-center text-2xl ${hind500.className}`}>R$1.200,000</p>
        {children}
        
      </div>
    )
  }

  const Despesas = () => {
    return (
      <>
        <div className="w-full flex">
          <div className="rounded-xl bg-white shadow-lg w-full h-40 mt-7 ml-7 mb-0 flex">
              <div className="flex my-auto w-full ">                   
                    <Linha>
                      <DataTempo data="20/08" />
                      <DataTempo data="21/08" />
                      <DataTempo data="22/08" />
                      <DataTempo data="23/08" />
                      <DataTempo data="24/08" />
                      <DataTempo data="25/08" />
                      <DataTempo data="26/08" />
                      <DataTempo data="27/08" />
                      <DataTempo data="28/08" />
                      <DataTempo data="29/08" />
                    </Linha>

                    <button type="button" className="cursor-pointer right-0 top-0 appearance-none pointer-events-auto text-base text-[#33355D]">Ultimos 10 dias
                    <ArrowDown2 className="mx-auto" size="24" color="#132861" /></button>  

                  </div>
                  </div>

                  <div className="m-7"> 
                  <ProximoLance >
              
                </ProximoLance>
                  </div>
            </div>
            {/* Barra de Scroll */}
                <div> 

                <Scroll />

                </div>

          {/* Barra Proximo lance */}
            <div className="pl-24 flex-initial w-16 absolute top-0 right-0 h-16 mt-[122px] pr-auto">
         
            </div>                   
      </>
    )
  }

export default Despesas
