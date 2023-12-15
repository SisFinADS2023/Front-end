"use client"

import Image from "next/image"
import { More, ArrowDown2 } from "iconsax-react"
import React, { useState } from 'react';

const GoalSection = ({goal}) => {
  return (
    <>
        <div className="bg-white overflow-hidden w-full h-auto drop-shadow-xl flex flex-row rounded-lg border-[1px]">
            <div className="w-full mr-8">
              <GoalBar goal={goal}/>
              <ArrowDown2 className="flex mx-auto my-6 cursor-pointer" size="28" color="black"/>
            </div>
            <div className="ml-auto mr-7 flex flex-col">
              <More className="mt-4 rotate-90 cursor-pointer" size="24" color="black"/>
            </div>
        </div>
        
    </>
  )
}

const GoalBar = ({ goal }) => {

  const [mouseEnter, setMouseEnter] = useState(false)

  return (
      <>
      <div className="flex flex-col w-full gap-4 mr-5 m-8" key={goal.name}>
          <div className="flex justify-between text-neutral-800">
              <h3 className="font-semibold">{goal.name}</h3>
          </div>
          <div
              className='relative h-3 w-full bg-black/10 rounded-full mb-4 cursor-pointer '>
              {mouseEnter &&
                  <span key={goal.earned} className='absolute top-3 px-2 py-1 rounded-md text-black bg-zinc-200 font-semibold text-sm' style={{ left: ` ${goal.earned > goal.total ? '90' : (goal.earned * 100 / goal.total) - 5}%` }}>{`${goal.earned >= goal.total ? 'Concluído' : "R$" + goal.earned}`}</span>
              }
              <span
                  onMouseEnter={() => setMouseEnter(!mouseEnter)}
                  onMouseLeave={() => setMouseEnter(false)}
                  className={`absolute h-3 ${goal.color} rounded-full  `} style={{ width: ` ${goal.earned > goal.total ? '100' : (goal.earned * 100 / goal.total)}%`, backgroundColor: `${goal.earned >= goal.total ? 'gold' : ""}` }}></span>
              <div className="flex justify-between mt-5">
              <span className='text-sm font-semibold mt-2 flex'>R$ {goal.earned}</span>
              <span className='text-sm font-semibold mt-2 flex'>R$ {goal.total}</span>
              </div>
          </div>
      </div>
      </>
  )
}

const Metas = () => {
  const goals = [
    {
      name: "Viagens",
      color: 'bg-primary-400',
      earned: 1442,
      total: 3200,
    },
    {
      name: "Computador",
      color: 'bg-tertiary-500',
      earned: 1836,
      total: 3179,
    },
    {
      name: "Celular",
      color: 'bg-darkBlue',
      earned: 1684,
      total: 2199,
    }
  ];

    return (
      <>
        <div className="flex justify-end">
          <button className="bg-secondary-500 text-white rounded-md px-8 font-semibold py-2 mr-7 mt-5">Criar meta</button>
        </div>
        <div className="flex mx-7 mt-2">
          <Image className="z-[60] w-full h-full" width={1700} height={300} src="../goals.svg" />
        </div>
        <div className="flex flex-wrap mt-5 mx-7 gap-y-7">
          {goals.map((goal, index) => (
            <GoalSection key={index} goal={goal} />
        ))}
        </div>
      </>
    )
  }

  export default Metas