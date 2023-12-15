import 'tailwindcss/tailwind.css';

export default function Button({className, children, onClick}) {
  return (
    <button
    onClick={onClick}
    className={`
         py-2 px-6 rounded text-[16px] font-semibold font-roboto
        ${className}
    `}
    >{children}
    
    </button>
  )
}
