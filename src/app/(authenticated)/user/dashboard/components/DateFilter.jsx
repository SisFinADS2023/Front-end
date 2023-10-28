import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { useState } from "react"

import {
    Calendar2,
} from 'iconsax-react'

export const DateFilter = () => {

    const date = new Date()
    date.toLocaleDateString('pt-BR')
    const currentMonth = date.toLocaleString('pt-BR', { month: 'long' })
    const currentYear = date.getFullYear()
    const formattedDate = `${currentMonth}/${currentYear}`

    const [toggleFilter, setToggleFilter] = useState(false)

    return (
        <>
            <div className="flex cursor-pointer" onClick={() => setToggleFilter(true)}>
                <div className="flex w-auto ml-auto h-10 py-[7px] bg-secondary-500 rounded-md gap-2 items-center">
                    <Calendar2 size={20} className="text-white ml-4" />
                    <h4 className="text-white capitalize font-normal text-base w-auto mr-4 select-none">{formattedDate}</h4>
                </div>
            </div>
            {
                toggleFilter &&

                <div className="flex h-screen w-screen top-0 right-0 fixed bg-black/70 z-10 justify-center items-center">
                    <div className="h-[459px] w-[626px] bg-white rounded-md p-8">

                        <div className="flex">
                            <div className="flex w-11/12 ">
                                <h4 className="text-2xl font-semibold text-secondary-500 mb-8">Filtro de pesquisa por data</h4>
                            </div>

                            <div className="flex justify-end items-start">

                                <button className="text-neutral-800 font-bold text-xl" onClick={() => {
                                    setToggleFilter(!toggleFilter)
                                }}>X</button>

                            </div>
                        </div>

                        <div className="flex flex-col">

                            <h5 className="text-secondary-500">Filtre por data customizada ou por mês:</h5>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                                    <DatePicker label="Data de início" />
                                    <DatePicker label="Data de fim" />
                                    <DatePicker label={"Por mês"} views={['month', 'year']} />
                                </DemoContainer>
                            </LocalizationProvider>

                            <div className="flex gap-4 mt-4 justify-center ">
                                <button className="w-[123px] h-10 px-8 py-[7px] text-secondary-500 bg-secondary-50 rounded-md" onClick={() => setToggleFilter(false)}>Cancelar</button>
                                <button className="w-[123px] h-10 px-8 py-[7px] text-secondary-500 font-semibold bg-primary-500 rounded-md">Filtrar</button>
                            </div>

                        </div>

                    </div>
                </div>
            }

        </>
    )
}
