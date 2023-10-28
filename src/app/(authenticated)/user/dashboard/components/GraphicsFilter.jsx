import Checkbox from '@mui/material/Checkbox';

import { useState } from "react"

import {
    Setting4,
  } from 'iconsax-react'

export const GraphicsFilter = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  
    const [toggleFilter, setToggleFilter] = useState(false)
  
    return (
      <>
        <div className="flex cursor-pointer" onClick={() => setToggleFilter(!toggleFilter)}>
          <div className="flex w-auto px-4 py-[7px] bg-secondary-500 rounded-md items-center h-10">
            <Setting4 size={20} className="text-white"/>
          </div>
        </div>
  
        {/* Modal */}
  
        {
          toggleFilter && 
  
          <div className="absolute right-[31px] top-[155px] flex w-auto px-3 py-5 justify-center items-center bg-white shadow-md rounded-md z-10">
            <div className="flex flex-col">
              
              <div className="flex items-center select-none">
                <Checkbox {...label} />
                <h6 className="mr-3">Transações Recentes</h6>
              </div>
  
              <div className="flex items-center">
                <Checkbox {...label} />
                <h6 className="mr-3">Transações Recentes</h6>
              </div>
  
              <div className="flex items-center">
                <Checkbox {...label} />
                <h6 className="mr-3">Transações Recentes</h6>
              </div>
  
              <div className="flex items-center">
                <Checkbox {...label} />
                <h6 className="mr-3">Transações Recentes</h6>
              </div>
  
              <div className="flex items-center">
                <Checkbox {...label} />
                <h6 className="mr-3">Transações Recentes</h6>
              </div>
  
            </div>
          </div>
        }
  
      </>
    )
  }