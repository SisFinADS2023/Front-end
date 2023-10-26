

export default function DashboardBanner() {
    return (
        <div className="h-32 w-full bg-tertiary-50 rounded-2xl pl-9 pt-7 flex my-5">
            <div>
                <h2 className="text-xl text-secondary-500 font-semibold mb-4">Transforme sua vida financeira com o Coinc</h2>
                <p className="text-base text-neutral-600">Descubra estratégias poderosas para economizar, investir e alcançar seus objetivos financeiros de forma eficaz. Experimente agora e abra as portas para um futuro financeiro mais próspero!</p>
            </div>
            <img className="h-40    -mt-5" src="../plantaBanner.svg" alt="" />
        </div>
    )

}