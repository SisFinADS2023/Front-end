'use client'

import { ChartsList } from "@/app/(authenticated)/user/dashboard/components/ChartsList"

import { DateFilter } from "@/app/(authenticated)/user/dashboard/components/DateFilter.jsx"
import { GraphicsFilter } from "@/app/(authenticated)/user/dashboard/components/GraphicsFilter.jsx"

import Link from 'next/link'

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { useState } from "react"

import {
  Eye,
  EyeSlash,
} from 'iconsax-react'
import TransacoesRecentes from './components/RecentsTransactions'
import Goals from './components/Goals'

const Overview = ({ title, value, path }) => {

  const [visible, setVisible] = useState(true)

  return (
    <>
      <Link href={`${path}`}>
        <div className="flex-start flex-col relative py-4 px-6 rounded-2xl border-zinc-100 bg-white shadow-md overflow-hidden">
          <h4 className="text-sm mb-4 font-semibold">{title}</h4>
          <div className="flex items-center">
            {
              visible ? (
                <>
                  <span className="text-3xl font-normal">R${value}</span>
                  <Eye className="absolute right-[18px] bottom-[13px] text-secondary-200" size={24} onClick={(e) => {
                    e.preventDefault()
                    setVisible(!visible)
                  }} />
                </>
              ) : (
                <>
                  <div className="flex items-center h-[36px] text-center"><span className="w-[105px] bg-secondary-500 h-[5px] text-center rounded-full"></span></div>
                  <EyeSlash className="absolute right-[18px] bottom-[13px] text-secondary-200" size={24} onClick={(e) => {
                    e.preventDefault()
                    setVisible(!visible)
                  }} />
                </>
              )
            }

          </div>
        </div>
      </Link>
    </>
  )
}



import { useReducer} from 'react';
import { ChartsFiltersDispatchContext, ChartsFiltersContext } from '@/app/(authenticated)/user/dashboard/Context/Context';

function chartsDataReducer(chartsData, { label, visible }) {
    return chartsData.map(chart => {
      if (chart.label == label) {
        chart.visible = visible;
        return chart;
      } else {
        return chart;
      }
    });
}

function fakeData() {
  return new Array(10)
    .fill(0)
    .map((_, i) => {
      return {
        year: 2014 + i,
        count: 100 * Math.random()
      }
    }
    );
}

const initialChartsData = [
  { instance: null, data: fakeData(), type: 'bar', label: 'Acquisitions by year 0', visible: true, },
  { instance: null, data: fakeData(), type: 'bar', label: 'Acquisitions by year 1', visible: true, },
  { instance: null, data: fakeData(), type: 'bar', label: 'Acquisitions by year 2', visible: true, },
  { instance: null, data: fakeData(), type: 'line', label: 'Acquisitions by year 3', visible: true, },
  { instance: null, data: fakeData(), type: 'bar', label: 'Acquisitions by year 4', visible: true, },
  { instance: null, data: fakeData(), type: 'bar', label: 'Acquisitions by year 5', visible: true, },
];

const Dashboard = ( {children} ) => {

  const [chartsData, chartsDataDispatcher] = useReducer(
    chartsDataReducer,
    initialChartsData
  )

  return (
    <>

      <div className="h-full">

        <div className="m-8">

          <div className="grid grid-cols-2">

            <div className="border-l-[6px] border-l-primary-800 h-10 mb-5">
              <h3 className="flex ml-4 text-3xl font-bold text-primary-800">Visão Geral</h3>
            </div>

            <div className="flex gap-4 justify-end">
              <DateFilter />
              <ChartsFiltersContext.Provider value={chartsData}>
                <ChartsFiltersDispatchContext.Provider value={chartsDataDispatcher}>
                  <GraphicsFilter />
                </ChartsFiltersDispatchContext.Provider>
              </ChartsFiltersContext.Provider>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">

            <Overview title="Saldo Atual" value="0,00" path="#" />
            <Overview title="Receitas" value="0,00" path="/user/transacoes/receitas" />
            <Overview title="Despesas" value="0,00" path="/user/transacoes/despesas" />
            <Overview title="Cartão de Crédito" value="0,00" path="#" />
          </div>

          <h3 className="text-3xl my-6 font-bold">Resultados</h3>

          <DndProvider backend={HTML5Backend}>
          <ChartsFiltersContext.Provider value={chartsData}>
            <ChartsList />
          </ChartsFiltersContext.Provider>
          </DndProvider>

        </div>
      </div>
    </>
  )
}

export default Dashboard


