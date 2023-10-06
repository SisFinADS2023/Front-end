import '@/app/globals.css'

export default function Button({className, children, onClick}) {
  return (
    <button
    onClick={onClick}
    className={`
         px-6 rounded text-[16px] font-semibold
        ${className}
    `}
    >{children}
    
    </button>
  )
}
