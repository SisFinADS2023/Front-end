'use client'

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
import RecentsTransactions from './components/RecentsTransactions'

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
import { ChartsDataDispatchContext, ChartsDataContext } from '@/app/(authenticated)/user/dashboard/Context/Context';

function chartsDataReducer(chartsData, { action, label, visible, source, destination }) {
    switch (action) {
      case 'toggleVisible':
        return chartsData.map(chart => {
          if (chart.label == label) {
            chart.visible = visible;
          }
          return chart;
        });

        case 'moveChart':
          const newCharts = [ ...chartsData ];
          const temp = newCharts[source];
          newCharts[source] = newCharts[destination];
          newCharts[destination] = temp;
          return newCharts;

        default:
          console.warn("chartsDataReducer(): action '" + action + "' is not valid");
          return chartsData;
    }
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

const Chart = ({ chart, index, moveChart }) => {

    useEffect(() => {
      if (!chart.ref.current) return;

      chart.instance = new chartjs.Chart(
        chart.ref.current,
        {
          type: chart.type,
          options: {
            maintainAspectRatio: false,
          },
          data: {
            labels: chart.data.map(row => row.year),
            datasets: [
              {
                label: chart.label,
                data: chart.data.map(row => row.count)
              }
            ]
          }
        }
      );

    return () => {
      chart.instance.destroy();
    };
  }, [chart.ref])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'chart',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }))

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'chart',
    drop: (item, monitor) => { moveChart(item.index, index) },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  }))

  return (
    <>
      <div ref={drop} className={`border-2 rounded-md ${ canDrop ? "border-black" : "border-gray"} ${ isOver ? "border-green" : "border-gray"}`}>
        <div ref={drag} className={`bg-transparent p-5 relative h-[30vh]`}>
          <canvas ref={chart.ref}></canvas>
        </div>
      </div>
    </>
  )
}

const ChartsList = () => {
  const [charts, setCharts] = useState([
    { instance: null, data: fakeData(), type: 'bar',  label: 'Acquisitions by year 0', ref: useRef(null) },
    { instance: null, data: fakeData(), type: 'bar',  label: 'Acquisitions by year 1', ref: useRef(null) },
    { instance: null, data: fakeData(), type: 'bar',  label: 'Acquisitions by year 2', ref: useRef(null) },
    { instance: null, data: fakeData(), type: 'line', label: 'Acquisitions by year 3', ref: useRef(null) },
    { instance: null, data: fakeData(), type: 'bar',  label: 'Acquisitions by year 4', ref: useRef(null) },
    { instance: null, data: fakeData(), type: 'bar',  label: 'Acquisitions by year 5', ref: useRef(null) },
  ]);

  const moveChart = useCallback((source, destination) => {
    setCharts((prevCharts) => {
      const newCharts = [ ...prevCharts ];
      const temp = newCharts[source];
      newCharts[source] = newCharts[destination];
      newCharts[destination] = temp;
      return newCharts;
  })
  }, []);

  return (
    <>
        <div className="flex gap-5 flex-wrap justify-between">
          <TransacoesRecentes/>
          <Goals/>
          {charts.map((chart, index) => <Chart key={index} chart={chart} index={index} moveChart={moveChart} /> )}
        </div>
    </>
  )
}

const Dashboard = () => {

  const [chartsData, chartsDataDispatcher] = useReducer(
    chartsDataReducer
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
              <ChartsDataContext.Provider value={chartsData}>
                <ChartsDataDispatchContext.Provider value={chartsDataDispatcher}>
                  <GraphicsFilter />
                </ChartsDataDispatchContext.Provider>
              </ChartsDataContext.Provider>
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
          <ChartsDataContext.Provider value={chartsData}>
            <ChartsDataDispatchContext.Provider value={chartsDataDispatcher}>
              <ChartsList />
            </ChartsDataDispatchContext.Provider>
          </ChartsDataContext.Provider>
          </DndProvider>

        </div>
      </div>
    </>
  )
}

export default Dashboard