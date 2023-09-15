import {League_Spartan} from 'next/font/google'

const league_Spartan = League_Spartan(
    {
        weight: '400',
        subsets: ['latin'],
    }
)

const Header = ({title, avatar}) => {

  return (
    <div className={league_Spartan.className}>

        <div className="relative w-auto bg-white h-[80px] flex justify-between">

            <div className="text-[40px] flex my-auto ml-[164px]">
                <h4 className="text-title">{title}</h4>
            </div>

            <div className="flex">
                <div className="w-[64px] h-[64px] my-auto mr-[74px]">
                    <img className="w-auto h-auto rounded-full"src={avatar} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header