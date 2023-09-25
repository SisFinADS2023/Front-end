import '@/app/globals.css'

export default function Button({className, children}) {
  return (
    <button
    className={`
         py-1 px-6 rounded text-[16px] font-semibold font-roboto
        ${className}
    `}
    >{children}
    
    </button>
  )
}
