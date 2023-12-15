import { Hind } from "next/font/google"
import { GalleryAdd } from "iconsax-react"

const hind500 = Hind({
    weight: '500',
    subsets: ["latin"],
}
) 

const TransactionSection = ({ transaction }) => {
    return(
    <>
        <div className="bg-white w-full h-24 drop-shadow-xl flex flex-row rounded-lg border-[1px]">
            <div>
            <h1 className={`ml-8 mt-4 text-2xl ${hind500.className}`}> {transaction.name} </h1>
            <h1 className={`ml-8 text-xl text-gray-500 ${hind500.className}`}> {transaction.category} </h1>
            </div>
            <div className="ml-auto mr-10 flex flex-col">
            <h1 className={`text-[#00032F] ml-auto mt-4 text-2xl font-semibold`}>{transaction.value}</h1>
            <h1 className={`text-xl text-gray-500`}>{transaction.date}</h1>
            </div>
            <div className={`h-full bg-seaBlue w-[84px] rounded-r-lg flex cursor-pointer`}>
            <GalleryAdd size="36" color="#FFFFFF" className="mx-auto my-auto"/>
            </div>
        </div>
    </>
)
}

export default TransactionSection