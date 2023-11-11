
import {
    Add
} from 'iconsax-react'

const AddTransactionButton = () => {

    return (
        <div className="w-[80px] h-[80px]">
            <button className="w-[80px] h-[80px] bg-primary-500 rounded-full flex justify-center items-center">
                <Add size="64" color="#FFFFFF"/>
            </button>
        </div>
    )
}

export default AddTransactionButton