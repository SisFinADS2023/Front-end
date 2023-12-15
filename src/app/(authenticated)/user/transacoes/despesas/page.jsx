"use client"

import Header from "@/components/Header"
import TransactionModal from "../components/TransactionModal"
import CategoryModal from "../components/CategoryModal"
import { Hind } from "next/font/google"
import { ArrowDown2, Data, GalleryAdd } from "iconsax-react"
import React, { useState } from 'react';

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

  const RecentTransactions = ({children}) => {
    return (
      <div className="bg-white overflow-x-auto w-auto mr-56 h-auto ml-7 flex flex-col rounded-xl drop-shadow-xl touch-auto bg-scroll"> 
        <h1 className={`${hind500.className} text-3xl mr-auto ml-8 mt-8`}>Recentes</h1>
        <div className="flex mt-16 mx-8 mb-8 flex-wrap gap-y-8">
          {children}
        </div>
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

  const CategorySection = ({ transaction }) => {
    return(
      <>
        <div className="bg-white w-full h-24 drop-shadow-xl flex flex-row rounded-lg border-[1px]">
          <div>
            <h1 className={`ml-8 mt-4 text-2xl ${hind500.className}`}> {transaction.name} </h1>
            <h1 className={`ml-8 text-xl text-gray-500 ${hind500.className}`}> {transaction.category} </h1>
          </div>
          <div className="ml-auto mr-10 flex flex-col">
            <h1 className={`text-[#00032F] ml-auto mt-4 text-2xl font-semibold`}>{transaction.value}</h1>
            <h1 className={`text-xl text-gray-500`}>{transaction.date}</h1>
          </div>
          <div className={`h-full bg-seaBlue w-[84px] rounded-r-lg flex cursor-pointer`}>
            <GalleryAdd size="36" color="#FFFFFF" className="mx-auto my-auto"/>
          </div>
        </div>
      </>
    )
  }

  const Despesas = () => {
    const transactions = [
      {
        name: "Padaria",
        category: "Alimentação",
        value: "20,54",
        date: "20/08/2023",
        color: "orange"
      },
      {
        name: "Conta de luz",
        category: "Essenciais",
        value: "135,95",
        date: "15/08/2023",
        color: "blue"
      },
      {
        name: "Aluguel",
        category: "Essenciais",
        value: "1200,00",
        date: "15/08/2023",
        color: "blue"
      },
      {
        name: "Camisinha riachuelo",
        category: "Diversos",
        value: "34,99",
        date: "05/08/2023",
        color: "pink"
      }
    ];

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

                  <RecentTransactions>
                    {
                      transactions.map((transaction) => (
                        <CategorySection transaction={transaction}></CategorySection>
                      ))
                    }
                  </RecentTransactions>

                </div>

          {/* Barra Proximo lance */}
            {/* <div className="pl-24 flex-initial w-16 absolute top-0 right-0 h-16 mt-[122px] pr-auto">
            <CategoryModal></CategoryModal>
            <TransactionModal></TransactionModal>
            </div>                    */}
      </>
    )
  }

export default Despesas
