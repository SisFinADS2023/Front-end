import { Hind } from "next/font/google"

const hind500 = Hind({
    weight: '500',
    subsets: ["latin"],
}
) 

const RecentTransactions = ({children}) => {
    return (
    <div className="bg-white overflow-x-auto w-auto mr-56 h-auto ml-7 flex flex-col rounded-xl drop-shadow-xl touch-auto bg-scroll"> 
        <h1 className={`${hind500.className} text-3xl mr-auto ml-8 mt-8`}>Recentes</h1>
        <div className="flex mt-16 mx-8 mb-8 flex-wrap gap-y-8">
            {children}
        </div>
    </div>
)
}

export default RecentTransactions
