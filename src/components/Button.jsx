import '@/app/globals.css'

export default function Button({className, children}) {
  return (
    <button
    className={`
         px-6 rounded text-[16px] font-semibold
        ${className}
    `}
    >{children}
    
    </button>
  )
}
