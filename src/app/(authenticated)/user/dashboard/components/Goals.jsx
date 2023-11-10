import { Maximize4 } from 'iconsax-react'
import { useState } from 'react'


export default function Goals({total='5200', current='5299'}) {

    const [mouseEnter, setMouseEnter] = useState(false)

    const Goals = [
        { nome: 'Objeto1', valorTotal: 1000, valorAtual: 800 },
        { nome: 'Objeto2', valorTotal: 500, valorAtual: 450 },
        { nome: 'Objeto3', valorTotal: 1200, valorAtual: 1100 },
        { nome: 'Objeto4', valorTotal: 800, valorAtual: 750 },
        { nome: 'Objeto5', valorTotal: 1500, valorAtual: 1400 }
      ];

    return (
        <div
        className=" w-[488px] h-[339px] rounded-md bg-white  p-6 overflow-scroll" >
            <div className='flex justify-between mb-5'>
                <h2 className="text-xl text-secondary-900 font-semibold ">Metas</h2>
                <button className='transform rotate-45'  onClick={() => setToogleMax(!toggleMax)}>
                    <Maximize4 />
                </button>
            </div>
            {Goals.map((goal, index) => (
                <div key={index}
                    className="flex flex-col gap-4">
                    <div className="flex justify-between text-neutral-800">
                        <h3 className="">{goal.nome}</h3>
                        <span >R${goal.valorTotal}</span>
                    </div>
                    <div
                    className='relative h-2 w-full bg-black/10 rounded-full mb-4 '>
                        {mouseEnter &&
                        <span className='absolute top-3 px-2 py-1 rounded-md text-black bg-zinc-200 font-semibold text-sm' style={{left: ` ${ goal.valorAtual > goal.valorTotal ? '90':  (goal.valorAtual * 100 / goal.valorTotal)-5}%`}}>{`${ goal.valorAtual >= goal.valorTotal ? 'Concluído' :  "R$" + goal.valorAtual}`}</span>
                        }
                        <span
                        onMouseEnter={() => setMouseEnter(!mouseEnter)}
                        onMouseLeave={() => setMouseEnter(false)}
                        className={`absolute h-2 bg-primary-700 rounded-full  `} style={{width: ` ${ goal.valorAtual > goal.valorTotal ? '100' :  (goal.valorAtual * 100 / goal.valorTotal)}%`,  backgroundColor: `${ goal.valorAtual >= goal.valorTotal ? 'gold':  ""}`}}></span>
                    </div>
                </div>
            ))}

            {/* <div className="flex flex-col gap-4">
                <div className="flex justify-between text-neutral-800">
                    <h3 className="">Viagem</h3>
                    <span >R${goal.valorTotal}</span>
                </div>
                <div
                className='relative h-2 w-full bg-black/10 rounded-full '>
                    {mouseEnter &&
                    <span className='absolute top-3 px-2 py-1 rounded-md text-black bg-zinc-200 font-semibold text-sm' style={{left: ` ${ goal.valorAtual > goal.valorTotal ? '90':  (goal.valorAtual * 100 / goal.valorTotal)-5}%`}}>{`${ goal.valorAtual >= goal.valorTotal ? 'Concluído' :  "R$" + goal.valorAtual}`}</span>
                    }
                    <span
                    onMouseEnter={() => setMouseEnter(!mouseEnter)}
                    onMouseLeave={() => setMouseEnter(false)}
                    className={`absolute h-2 bg-primary-700 rounded-full  `} style={{width: ` ${ goal.valorAtual > goal.valorTotal ? '100' :  (goal.valorAtual * 100 / goal.valorTotal)}%`,  backgroundColor: `${ goal.valorAtual >= goal.valorTotal ? 'gold':  ""}`}}></span>
                </div>
            </div> */}
        </div>
    )
}