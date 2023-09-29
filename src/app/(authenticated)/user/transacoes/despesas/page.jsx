import Header from "@/components/Header"
import { Hind } from "next/font/google"
import { ArrowDown2 } from "iconsax-react"

const hind500 = Hind({
  weight: '500',
  subsets: ["latin"],
}
) 



const Linha = ({children}) => {
  return(

      <div className="bg-white w-full h-14 flex scroll-m-0 "> 
            <h1 className={`bg-[#132861] w-full h-1 my-auto flex justify-around ${hind500.className}`}>
              {children}
            </h1>
      </div>
  )
}

const DataTempo = (props) => {
  return(    
      <div className="w-2 h-1 mt-3">
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

const Despesas = () => {
    return (
      <>
        <Header title="Despesas" avatar="https://avatars.githubusercontent.com/u/102611166?s=70&v=4"/> 
          <div className="rounded-xl bg-white shadow-xl w-95% h-40 m-7 flex">
            <div className="flex my-auto w-full">
            <button className="justify-end absolute top-0 right-0 h-16 w-16">Ultimos 10 dias</button>   
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
            </div>
            </div>
                   
      </>
    )
  }

  export default Despesas