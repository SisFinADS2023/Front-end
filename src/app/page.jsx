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
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
  ];


  const [toogleMenu, setToogleMenu] = useState(Boolean)

  return (
    <div className="bg-white flex flex-col gap-10">
      <nav className="pt-2 flex justify-around items-center">
        <div>
          <img className="h-12" src="../logo.svg" alt="Logo with Conic" />
        </div>

        <ul className="hidden gap-14 font-roboto lg:flex">
          <li>lorem</li>
          <li>Koren lorem</li>
          <li>Dolor</li>
          <li>Dolor</li>
          <li>Dolor</li>
        </ul>

        <div className="flex gap-7 py-3">
          <Button
            className='border'
          >
            <Link href="/login">Entrar</Link>
          </Button>
          <Button
            className='border hidden lg:block'
          >
            <Link href="/cadastro">Cadastrar-se</Link>
          </Button>
        </div>

        <HambergerMenu
          size={32}
          color={toogleMenu ? '#218b4d ' : "#000000 "}
          onClick={() => setToogleMenu(!toogleMenu)}
          className="cursor-pointer  lg:hidden "
        />

        {toogleMenu &&
          <div className="fixed w-3/6 right-0 top-16 shadow bg-white m-3">
            <ul className=" bg-white">
              <li className="py-2 px-5 border">Lorem</li>
              <li className="py-2 px-5 border">Lorem</li>
              <li className="py-2 px-5 border">Lorem</li>
              <li className="py-2 px-5 border">Lorem</li>
            </ul>
          </div>
        }
      </nav>

      <section className="flex flex-col gap-5 justify-center px-12 items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="z-10 flex flex-col gap-5 text-xl font-league items-center  text-center lg:w-5/12 lg:text-5xl lg:mt-28">
          <p className="text-title font-semibold">
            Korem ipsum dolor sit amet, consectetur adipiscing
            <span className="pl-4 font-bold">
              elit<span className="text-logo">.</span>
            </span>
            <span className="pl-4 font-bold">
              Nunc<span className="text-logo">.</span>
            </span>
          </p>
          <p className="my-2 text-base font-roboto text-[#6B767E] ">
            Korem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <Button
            className='text-white bg-title lg:py-2 lg:w-2/12'
          >
            lorem
          </Button>
        </div>
        <div>
          <img className=" z-0 right-0 top-13 lg:h-[600px] " src="../imagemHome.svg" alt="Logo with Conic" />
        </div>
      </section>

      <section className="bg-[#E5E7EB]">
        <div className="flex flex-col p-5 items-center mb-2">
          <h2 className="my-2 text-xl font-semibold font-league lg:text-3xl">Korem ipsum & dolor sit amet</h2>
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
        <div className="bg-[#E5E7EB] flex flex-col justify-center rounded-xl items-center py-3 mb-1 ">
          <h2 className="my-5 px-20 text-center text-xl font-semibold font-league lg:text-3xl">Korem ipsum & dolor sit amet</h2>
          <div className="bg-white h-56 w-5/6 rounded mb-5 lg:h-96"></div>
        </div>
      </section>

      <footer className="bg-[#E5E7EB] h-10"></footer>

      {/* 
      

      <section className="h-[400px] w-2/6 mt-40 ml-40">
        <div className="text-[45px] w-4/6">
          <p className="text-title font-league ">
            Korem ipsum dolor sit amet, consectetur adipiscing
            <span className="pl-4 font-bold">
              elit<span className="text-logo">.</span>
            </span>
            <span className="pl-4 font-bold">
              Nunc<span className="text-logo">.</span>
            </span>
          </p>

        </div>
        <p className="my-4 text-[20px] font-roboto text-[#6B767E] ">
          Korem ipsum dolor sit amet, adipiscin
        </p>
        <Button
          className='text-white bg-title py-2'
        >
          lorem
        </Button>
      </section>

      <section className="bg-[#EAF2FB] h-auto flex flex-col text-center ">
        <div className="mt-10">
          <h2 className="text-[45px] font-league text-title font-semibold mb-5">
            Korem ipsum & dolor sit amet 
          </h2>
          <h3 className="text-[22px] font-roboto text-title px-20 mb-10">Korem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc. </h3>
            <div className="flex justify-around mb-20"> 
                <div className="h-[397px] bg-white w-[397px] shadow-md rounded-lg"></div>
                <div className="h-[397px] bg-white w-[397px] shadow-md rounded-lg"></div>
                <div className="h-[397px] bg-white w-[397px] shadow-md rounded-lg"></div>
            </div>
        </div>
      </section>

      <section className="bg-white p-40">
        <div className="bg-[#EAF2FB] h-auto rounded-xl p-20">
            <div className="">
              <h2 className="text-[45px] text-title font-semibold mb-5 font-league">Korem ipsum & dolor sit amet </h2>
              <div className="bg-white h-[400px] rounded-xl"></div>
            </div>
        </div>
      </section> */}
    </div>
  )
}
