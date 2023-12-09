'use client';

import Button from "@/components/Button";
import Link from "next/link";
import '@/app/globals.css'
import { HambergerMenu } from 'iconsax-react'
import { useState } from "react";
import Carousel from "@/components/Carousel";

export default function Home() {

  const images = [
    {
      imgPath:
        'https://images.pexels.com/photos/3021563/pexels-photo-3021563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      imgPath:
        'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      imgPath:
        'https://images.pexels.com/photos/9607206/pexels-photo-9607206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];


  const [toogleMenu, setToogleMenu] = useState(Boolean)

  return (
    <div className="bg-white flex flex-col gap-10">
      <nav className="pt-2 flex justify-around items-center">
        <div>
          <img className="h-12" src="../logo.svg" alt="Logo with Conic" />
        </div>

        <ul className="hidden gap-14 font-roboto lg:flex text-secondary-500 font-semibold">
          <li>lorem</li>
          <li>Koren lorem</li>
          <li>Dolor</li>
          <li>Dolor</li>
          <li>Dolor</li>
        </ul>

        <div className="flex gap-7 py-3">
          <Button
            className='border bg-secondary-500 text-white z-50'
          >
            <Link href="/login">Entrar</Link>
          </Button>
          <Button
            className='border hidden lg:block bg-primary-500 text-secondary-500 z-50'
          >
            <Link href="/cadastro">Cadastrar-se</Link>
          </Button>
        </div>

        <HambergerMenu
          size={32}
          color={toogleMenu ? '#545677 ' : "#000000 "}
          onClick={() => setToogleMenu(!toogleMenu)}
          className="cursor-pointer  lg:hidden "
        />

        {toogleMenu &&
          <div className="absolute z-10 w-3/6 right-0 top-16 shadow m-3">
            <ul className=" bg-white">
              <li className="py-2 px-5 border">Lorem</li>
              <li className="py-2 px-5 border">Lorem</li>
              <li className="py-2 px-5 border">Lorem</li>
              <li className="py-2 px-5 border">Lorem</li>
            </ul>
          </div>
        }
      </nav>

      <section className="flex flex-col gap-5 justify-center px-12 items-center min-h-[600px] lg:flex-row lg:items-start lg:justify-between z-0">
        
        <div className="z-10 flex flex-col gap-5 text-xl font-league items-center  text-center lg:w-5/12 lg:text-7xl lg:mt-8 lg:ml-28 lg:items-start lg:text-start">
          <p className="font-semibold text-secondary-500">
            Controle suas finanças
            <span className="pl-4 font-bold text-primary-700">
            com facilidade.
            </span>
          </p>
          <p className="my-2 text-base font-roboto text-[#6B767E] lg:w-10/12 lg:text-xl">
          Junte-se ao COINC para uma jornada de controle, compreensão e crescimento financeiro. Comece hoje e libere o potencial dos seus dados financeiros!
          </p>
          <Button
            className='border bg-secondary-500 py-3 text-white hidden lg:flex'
          >
            Saiba mais
          </Button>
        </div>
        <div>
          <img className="absolute z-0 right-52 top-10 w-[600px] lg:w-[1300px] lg:right-0 lg:top-0" src="../imagemHome.svg" alt="Coinc" />
        </div>
      </section>

      <div className="flex flex-col p-5 items-center mb-2">
        <h2 className="text-secondary-500 my-2 text-xl font-semibold font-league lg:text-3xl">Transformando dados em
        <span className="pl-2 text-primary-700">gráficos claros & acessíveis</span>
        </h2>
      </div>     
      <div className="flex flex-col p-5 items-center mb-2">
        <img className="z-0 right-52 top-10 w-[600px] lg:w-[1300px] lg:right-0 lg:top-0" src="../sobre-nos.svg" alt="Sobre nós" />
      </div>

      <section className="bg-neutral-100">
        <div className="flex flex-col p-5 items-center mb-2">
          <h2 className="text-secondary-500 my-2 text-xl font-semibold font-league lg:text-3xl">Depoimentos</h2>
          <h3 className="text-xl mb-8 text-[#6B767E] font-sembold hidden lg:block">Veja o que alguns usuários estão falando sobre o Coinc!</h3>
          <Carousel
            images={images}
          />
          <div className="justify-around gap-5 hidden lg:flex ">
            {images.map((image) => (
              <div>
                <img className="shadow rounded-full w-52 ml-24" src={image.imgPath} alt="" />
              <div className="justify-around hidden lg:flex bg-white h-60 w-[400px] mt-[-100px] rounded-xl">
                <img className="w-7" src="../quota.svg" />
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 lg:px-20 lg:py-10">
        <div className="bg-[#E5E7EB] flex flex-col justify-center rounded-xl items-center py-3 mb-1 font-semibold text-secondary-500 ">
          <h2 className="my-5 px-20 text-center text-xl font-semibold font-league lg:text-3xl">Korem ipsum & dolor sit amet</h2>
          <div className="bg-white h-56 w-5/6 rounded mb-5 lg:h-96"></div>
        </div>
      </section>

      <footer className="bg-[#E5E7EB] h-10"></footer>
    </div>
  )
}
