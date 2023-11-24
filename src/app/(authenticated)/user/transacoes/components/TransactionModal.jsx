import { Hind, Inter} from 'next/font/google'
import {
    ArrowDown2,
    ArrowUp2,
    Calendar
} from 'iconsax-react'
import { useState } from 'react'

import './checkBoxStyle.css'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs'


const hindTituloModal = Hind(
    {
        weight: '500',
        subsets: ['latin'],
    }
)

const interTextButton = Inter(
    {
        weight: '500',
        subsets: ['latin'],
    }
)

const hindTextCheckboxOp = Hind(
    {
        weight: '500',
        subsets: ['latin']
    }
)

const TransactionModal = () => {

    const [checkBoxDropDownOptions, setCheckBoxDropDownOptions] = useState(false)

    const checkBoxDropDown = () => {
        setCheckBoxDropDownOptions(!checkBoxDropDownOptions)
    }    

    const [date, setDate] = useState(dayjs())

    const changeDate = (newDate) => {
        setDate(newDate)
    }
    
    const dayOfTheWeek = (day) => {

        switch(day) {
            case 0: return 'o domingo';
            case 1: return 'a segunda-feira';
            case 2: return 'a terça-feira';
            case 3: return 'a quarta-feira';
            case 4: return 'a quinta-feira';
            case 5: return 'a sexta-feira';
            case 6: return 'o sábado';
        }

    }

    return (

        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
            <div className={`w-[540px] bg-white rounded-[20px] flex-col justify-start items-center inline-flex ${checkBoxDropDownOptions ? 'h-[520px]' : 'h-[380px]'}`}>
                <div className="mt-2 w-[500px] h-[44px] flex-col justify-start items-start gap-5 inline-flex">
                    <p className={`mt-3 text-center text-secondary-500 text-xl ${hindTituloModal.className}`}>Nova receita</p>
                    <span className="w-[500px] h-[0px] border-b border-secondary-500"></span>
                </div>

                <div className="w-[500px] mt-[36px] h-[56px] justify-between items-end inline-flex">
                    <div className="w-[240px] h-[40px] pl-2 border-2 rounded border-secondary-200">
                        <input type="text" placeholder="Nome *" className="w-full text-secondary-500 h-full text-[16px] focus:outline-none" />
                    </div>
                    <div className="w-[240px] h-[40px] pl-2 border-2 rounded border-secondary-200">
                        <input type="text" placeholder="R$ 0.00 *" className=" w-full text-secondary-500 text-[16px] h-full focus:outline-none" />
                    </div>
                </div>

                <div className="w-[500px] mt-[32px] justify-between items-end inline-flex">
                    <div className="w-[328px] h-[40px] border-2 rounded border-secondary-200 flex justify-between items-center cursor-pointer p-[10px]">
                        <span className="text-[#a9a9a9] text-base leading-normal" disabled>Categoria</span>
                        <ArrowDown2 size="20px"/>
                    </div>                
                    <div className="w-[150px] h-[40px] border rounded border-secondary-300 justify-center items-end inline-flex">
                        <div>
                            <LocalizationProvider adapterLocale="pt-br" dateAdapter={AdapterDayjs}>
                                <DatePicker value={date} onChange={changeDate} slotProps={{ textField: 
                                    {  
                                        size: 'small' ,
                                        focused: false,
                                        color: 'secondary'
                                    } 
                                }}/>
                            </LocalizationProvider>
                        </div>
                    </div>                        
                </div>

                <div className='w-[500px] h-[56px] mt-[24px] flex'>
                    <div onClick={checkBoxDropDown} className='flex justify-start items-center gap-3 cursor-pointer'>
                        <Calendar size="28px" color="#000334"/>
                        <p className={`text-secondary-500 text-xl font-normal ${hindTituloModal.className}`}>Repetir receita</p>
                        {
                            checkBoxDropDownOptions ? <ArrowUp2 /> : <ArrowDown2 />
                        }
                    </div>
                    
                    <div className='flex relative justify-end items-end left-20'>
                              
                    </div>              
                </div>

                <div className={`w-[500px] h-[80px] flex flex-col justify-start gap-4 mt-[20px] mb-[32px] ${checkBoxDropDownOptions ? 'flex' : 'hidden'}`}>
                    <div className='checkbox-container'>
                        <input className='' type="checkbox" name="everyday"/>
                        <label className={`${hindTextCheckboxOp.className} text-[16px] text-secondary-500`} />
                        <span className={`${hindTextCheckboxOp.className} text-[16px] text-secondary-500 ml-5`}>Todos os dias</span>
                    </div>
                    <div className='checkbox-container'>
                        <input className='' type="checkbox" name="everyday"/>
                        <label className={`${hindTextCheckboxOp.className} text-[16px] text-secondary-500`} />
                        <span className={`${hindTextCheckboxOp.className} text-[16px] text-secondary-500 ml-5`}>Todas as semanas n{dayOfTheWeek(date.$W)} </span>
                    </div>                    
                    <div className='checkbox-container'>
                        <input className='' type="checkbox" name="everyday"/>
                        <label className={`${hindTextCheckboxOp.className} text-[16px] text-secondary-500`} />
                        <span className={`${hindTextCheckboxOp.className} text-[16px] text-secondary-500 ml-5`}>Todos os meses no dia {date.$D}</span>
                    </div>                                      
                </div>                

                <div className="w-[508px] mt-[24px] h-[40px] justify-between items-center inline-flex">
                    <div className="w-[184px] h-[40px] px-[32px] py-[7px] bg-[#E8EEF4] rounded-[5px] justify-center items-center gap-2.5 flex cursor-pointer" onClick={() => changeModalIsOpen(false)}>
                        <button className={`text-secondary-500 text-base ${interTextButton.className}`}>Cancelar</button>
                    </div>
                    <div className="w-[184px] h-[40px] px-[32px] py-[7px] bg-primary-500 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <button className={`text-secondary-500 text-base ${interTextButton.className}`}>Adicionar</button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default TransactionModal