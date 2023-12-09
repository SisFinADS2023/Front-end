'use client'

import { use, useState } from 'react';

import {
    GalleryAdd,
    Colorfilter,
    ArrowRight,
    Coffee,
    Danger,
    Devices,
    Heart,
    House,
    Weight,
    Cake,
    Bank,
    Box,
    Building,
    Bus,
    Car,
    Hospital,
    LampOn,
    MenuBoard,
    Money3,
    People,
    Personalcard,
    Shop,
    StatusUp,
    Teacher,
    TaskSquare,
    Truck,
    Smileys,
} from 'iconsax-react'

const CategoryModal = () => {

    const listaDeCores = ['bg-[#E12C00]', 'bg-[#EBE900]', 'bg-[#11D17E]', 'bg-[#004EEB]', 'bg-[#D422E1]', 'bg-[#EBE50B]', 
                            'bg-[#8DBE24]', 'bg-[#F76C4C]', 'bg-[#D12460]', 'bg-[#0095CD]', 'bg-[#006CC3]', 'bg-[#00E1BF]'];

    const [colorOptions, setColorOptions] = useState(false)

    const showColorOptions = () => {
        setColorOptions(!colorOptions)
        if(iconOptions != false) {
            setIconOptions(false)
        }
    }

    const [selectedColorOption, setSelectedColorOption] = useState(<Colorfilter color="#000334" size="28px"/>)

    const selectColor = (color) => {
        setSelectedColorOption(color)
        showColorOptions()
    }

    const listaDeIcones = [
        {name: 'Truck', icon: <Truck color="#000334" size="32px"/>},
        {name: 'Coffee', icon: <Coffee color="#000334" size="32px"/>},
        {name: 'Danger', icon: <Danger color="#000334" size="32px"/>},
        {name: 'Devices', icon: <Devices color="#000334" size="32px"/>},
        {name: 'Heart', icon: <Heart color="#000334" size="32px"/>},
        {name: 'House', icon: <House color="#000334" size="32px"/>},
        {name: 'Weight', icon: <Weight color="#000334" size="32px"/>},
        {name: 'Cake', icon: <Cake color="#000334" size="32px"/>},
        {name: 'Bank', icon: <Bank color="#000334" size="32px"/>},
        {name: 'Box', icon: <Box color="#000334" size="32px"/>},
        {name: 'Building', icon: <Building color="#000334" size="32px"/>},
        {name: 'Bus', icon: <Bus color="#000334" size="32px"/>},
        {name: 'Car', icon: <Car color="#000334" size="32px"/>},
        {name: 'Hospital', icon: <Hospital color="#000334" size="32px"/>},
        {name: 'LampOn', icon: <LampOn color="#000334" size="32px"/>},
        {name: 'MenuBoard', icon: <MenuBoard color="#000334" size="32px"/>},
        {name: 'Money3', icon: <Money3 color="#000334" size="32px"/>},
        {name: 'People', icon: <People color="#000334" size="32px"/>},
        {name: 'PersonalCard', icon: <Personalcard color="#000334" size="32px"/>},
        {name: 'Shop', icon: <Shop color="#000334" size="32px"/>},
        {name: 'StatusUp', icon: <StatusUp color="#000334" size="32px"/>},
        {name: 'Teacher', icon: <Teacher color="#000334" size="32px"/>},
        {name: 'TaskSquare', icon: <TaskSquare color="#000334" size="32px"/>},
        {name: 'Smileys', icon: <Smileys color="#000334" size="32px"/>}
    ]

    const [iconOptions, setIconOptions] = useState(false)

    const showIconOptions = () => {
        setIconOptions(!iconOptions)
        if(colorOptions != false) {
            setColorOptions(false)
        }
    }

    const [selectedIconOption, setSelectIconOption] = useState(<GalleryAdd color="#000334" size="28px"/>)

    const selectIcon = (icon) => {
        setSelectIconOption(icon)
        showIconOptions()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">

            <div className={`w-[480px] bg-white rounded-[15px] ${colorOptions ? 'h-[200px]' : 'h-[100px]'}  ${iconOptions ? 'h-[280px]' : 'h-[100px]'}`}>

                <div className=" h-[100px] flex justify-center items-center gap-[16px]">
                    <div className="w-[300px] h-[48px] pl-2 border-2 rounded border-secondary-200">
                        <input type="text" placeholder="Nome da Categoria" className="w-full text-secondary-500 h-full text-[16px] focus:outline-none" />
                    </div>
                    <div onClick={showIconOptions} className="cursor-pointer">                
                        {selectedIconOption}
                    </div>
                    <div onClick={showColorOptions} className="cursor-pointer">
                        {selectedColorOption}
                    </div>
                    <div className="cursor-pointer">
                        <ArrowRight color="#000334"/>
                    </div>
                </div>
                <div className={`bg-white w-[480px] h-[80px] ${colorOptions ? '' : 'hidden'}`}>
                    <div className="bg-white grid grid-cols-6 gap-[12px] place-items-center">
                        {
                            listaDeCores.map((lista) => (
                                <div onClick={() => selectColor(<div className={`cursor-pointer rounded-full ${lista} w-[32px] h-[32px]`}/>)} className={`cursor-pointer rounded-full ${lista} w-[32px] h-[32px]`} />
                            ))
                        }
                    </div>
                </div>
                <div className={` bg-white w-[480px] h-[140px] ${iconOptions ? '' : 'hidden'}`}>
                    <div className="grid grid-cols-6 gap-[10px] place-items-center">
                        {
                            listaDeIcones.map((lista) => (
                            <div onClick={() => selectIcon(lista.icon)} className="cursor-pointer">
                                {lista.icon}
                            </div>

                            ))
                        }    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryModal