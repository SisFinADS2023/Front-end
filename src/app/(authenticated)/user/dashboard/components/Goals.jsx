'use client'

import { useState } from 'react'

const Goal = ({ goal }) => {

    const [mouseEnter, setMouseEnter] = useState(false)

    return (
        <>
        <div className="flex flex-col gap-4 mr-5 m-5" key={goal.id}>
            <div className="flex justify-between text-neutral-800">
                <h3 className="font-semibold">{goal.nome}</h3>
                <span className='font-semibold'>R${goal.valorTotal}</span>
            </div>
            <div
                className='relative h-2 w-full bg-black/10 rounded-full mb-4 cursor-pointer '>
                {mouseEnter &&
                    <span key={goal.valorAtual} className='absolute top-3 px-2 py-1 rounded-md text-black bg-zinc-200 font-semibold text-sm' style={{ left: ` ${goal.valorAtual > goal.valorTotal ? '90' : (goal.valorAtual * 100 / goal.valorTotal) - 5}%` }}>{`${goal.valorAtual >= goal.valorTotal ? 'Concluído' : "R$" + goal.valorAtual}`}</span>
                }
                <span
                    onMouseEnter={() => setMouseEnter(!mouseEnter)}
                    onMouseLeave={() => setMouseEnter(false)}
                    className={`absolute h-2 ${goal.color} rounded-full  `} style={{ width: ` ${goal.valorAtual > goal.valorTotal ? '100' : (goal.valorAtual * 100 / goal.valorTotal)}%`, backgroundColor: `${goal.valorAtual >= goal.valorTotal ? 'gold' : ""}` }}></span>
            </div>
        </div>
        </>
    )
}

export default function Goals() {

    const Goals = [
        { id: 0, nome: 'Viagem', valorTotal: 1000, color: 'bg-primary-400', valorAtual: 800 },
        { id: 1, nome: 'Carro', valorTotal: 500, color: 'bg-secondary-700', valorAtual: 250 },
        { id: 2, nome: 'Casa', valorTotal: 1200, color: 'bg-primary-700', valorAtual: 800 },
        { id: 3, nome: 'Emergência', valorTotal: 800, color: 'bg-tertiary-500', valorAtual: 400 },
        { id: 4, nome: 'Intercâmbio', valorTotal: 1500, color: 'bg-primary-400', valorAtual: 1000 }
    ];

    return (
        <>
        <div className=" p-5 relative h-[30vh] rounded-md bg-white py-4 px-4 overflow-hidden shadow" >
            <div className='flex justify-between mb-5 px-4'>
                <h2 className="text-xl text-secondary-900 font-semibold ">Metas</h2>
            </div>
            <div className=' h-5/6 overflow-y-scroll rolagem content p-3 m-5'>
                {Goals.map((goal) => (
                    <Goal goal={goal} />
                ))}
            </div>
        </div>
        </>
    )
}
