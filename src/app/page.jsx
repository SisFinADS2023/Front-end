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
        'https://avatars.githubusercontent.com/u/121815223?s=64&v=4',
    },
    {
      imgPath:
        'https://avatars.githubusercontent.com/u/121815223?s=64&v=4',
    },
    {
      imgPath:
        'https://avatars.githubusercontent.com/u/121815223?s=64&v=4',
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
            className='border bg-secondary-500 text-white'
          >
            <Link href="/login">Entrar</Link>
          </Button>
          <Button
            className='border hidden lg:block bg-primary-500 text-secondary-500'
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

      <section className="flex flex-col gap-5 justify-center px-12 items-center lg:flex-row lg:items-start lg:justify-between z-0">
        
        <div className="z-10 flex flex-col gap-5 text-xl font-league items-center  text-center lg:w-4/12 lg:text-5xl lg:mt-28 lg:ml-28 lg:items-start lg:text-start">
          <p className="font-semibold text-secondary-500">
            Korem ipsum dolor sit amet, consectetur adipiscing elit.
            <span className="pl-4 font-bold text-primary-700">
              Nunc.
            </span>
          </p>
          <p className="my-2 text-base font-roboto text-[#6B767E] ">
            Korem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <Button
            className='border bg-secondary-500 py-3 text-white hidden lg:flex'
          >
            Saiba mais
          </Button>
        </div>
        <div>
          <img className=" z-0 right-0 top-13 lg:h-[600px] " src="../imagemHome.svg" alt="Logo with Conic" />
        </div>
      </section>

      <section className="bg-[#E5E7EB]">
        <div className="flex flex-col p-5 items-center mb-2">
          <h2 className="text-secondary-500 my-2 text-xl font-semibold font-league lg:text-3xl">Korem ipsum & dolor sit amet</h2>
          <h3 className="text-xl mb-8 text-[#6B767E] font-sembold hidden lg:block">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.</h3>
          <Carousel
            images={images}
          />
          <div className="justify-around gap-5 hidden lg:flex ">
            {images.map((image) => (
              <div>
                <img className="shadow" src={image.imgPath} alt="" />
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
