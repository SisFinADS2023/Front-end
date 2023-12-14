
'use client'

import {
    Add
} from 'iconsax-react'

import { useState } from 'react'
import TransactionModal from './TransactionModal'

const AddTransactionButton = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className="w-[80px] h-[80px]">
            <button onClick={() => setShowModal(true)} className="w-[80px] h-[80px] bg-[#11D07D] rounded-full flex justify-center items-center">
                <Add size="64" color="#FFFFFF"/>
            </button>

            <TransactionModal modalIsOpen={showModal} changeModalIsOpen={setShowModal}/>
        </div>
    )
}

export default AddTransactionButton