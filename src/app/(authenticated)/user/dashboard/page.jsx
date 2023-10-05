'use client'

import Header from "@/components/Header"
import Link from 'next/link'
import Chart from 'chart.js/auto'
import { useEffect, useState, useRef } from "react"

const Overview = ({ title, value, path }) => {
  return (
    <>
      <Link href={`${path}`}>
        <div className="flex-start flex-col py-4 px-6 rounded-2xl border-zinc-100 bg-white shadow-md">
          <h4 className="text-sm mb-4 font-semibold">{title}</h4>
          <span className="text-3xl font-normal">R${value}</span>
        </div>
      </Link>
    </>
  )
}

function fakeData() {
  return new Array(10)
    .fill(0)
    .map((_, i) => {
      return {year: 2014 + i,
        count: 100 * Math.random()
      }
    }
  );
}

const Dashboard = () => {

  const charts = [
    {instance: null, state: useState(() => fakeData()), type: 'bar', label: 'Acquisitions by year', ref: useRef(null)},
    {instance: null, state: useState(() => fakeData()), type: 'bar', label: 'Acquisitions by year', ref: useRef(null)},
    {instance: null, state: useState(() => fakeData()), type: 'pie', label: 'Acquisitions by year', ref: useRef(null)},
    {instance: null, state: useState(() => fakeData()), type: 'line', label: 'Acquisitions by year', ref: useRef(null)},
    {instance: null, state: useState(() => fakeData()), type: 'bar', label: 'Acquisitions by year', ref: useRef(null)},
    {instance: null, state: useState(() => fakeData()), type: 'bar', label: 'Acquisitions by year', ref: useRef(null)},
  ]

  useEffect(() => {
    for (let chart of charts) {
        chart.instance = new Chart(
          chart.ref.current,
          {
            type: chart.type,
            data: {
              labels: chart.state[0].map(row => row.year),
              datasets: [
                {
                  label: chart.label,
                  data: chart.state[0].map(row => row.count)
                }
              ]
            }
          }
        );
    }

    return () => {
      for (let chart of charts) {
        chart.instance.destroy();
      }
    };
  })



  return (
    <>
      <div className="h-full">

        <div className="m-8">

          <div className="flex-start flex-col">
            <h2 className="mb-5 font-normal text-xl">Dashboards</h2>
            <h3 className="font-bold text-5xl mb-3">Overview</h3>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <Overview title="Saldo Atual" value="0,00" path="#" />
            <Overview title="Receitas" value="0,00" path="/tansacoes/receitas" />
            <Overview title="Despesas" value="0,00" path="/tansacoes/receitas" />
            <Overview title="Cartão de Crédito" value="0,00" path="#" />
          </div>

          <h3 className="text-3xl my-6 font-bold">Resultados</h3>

          <div className="grid grid-cols-3 gap-5">
            { charts.map((chart, index) => <div key={index} className="w-full rounded-md bg-white p-5"><canvas ref={chart.ref}></canvas></div>) }
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard