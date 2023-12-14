'use client';

import Button from "@/components/Button";
import Link from "next/link";
import '@/app/globals.css'
import { HambergerMenu } from 'iconsax-react'
import { useState } from "react";
import Carousel from "@/components/Carousel";
import Image from 'next/image'
import {Hind, Inter} from 'next/font/google'

const hind = Hind(
  {
      weight: '500',
      subsets: ['latin'],
  }
)  

export default function Home() {

  const images = [
    {
      id: 0,
      imgPath:
        'https://images.pexels.com/photos/3021563/pexels-photo-3021563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text:'As notificações são incríveis! Recebo lembretes sobre contas a pagar, vencimentos e até sugestões de economia. Isso me mantém sempre informada e no controle.',
      name:'Cláudia Santos',
      profLocal:'Social Media, Rio de Janeiro - RJ'
    },
    {
      id: 1,
      imgPath:
        'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text:'O suporte ao cliente é rápido, eficiente e sempre disposto a ajudar. Qualquer dúvida ou problema é resolvido com prontidão, o que é crucial ao lidar com questões financeiras.',
      name:'Maria Fernanda',
      profLocal:'Arquiteta, São Paulo - SP'
    },
    {
      id: 2,
      imgPath:
        'https://images.pexels.com/photos/9607206/pexels-photo-9607206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text:'O COINC possui uma interface extremamente intuitiva, facilitando a navegação e tornando o controle das finanças uma tarefa simples e agradável.',
      name:'Marcos Almeida',
      profLocal:'Engenheiro de produção, Belo Horizonte - MG'
    },
  ];

  const [toogleMenu, setToogleMenu] = useState(Boolean)

  return (
    <>
    <div className="bg-white flex flex-col gap-10 items-center" id="locationHeader">
      <nav className="bg-white z-[99] w-full pt-2 flex justify-around items-center fixed">
        <div>
          <Image className="h-12" width={200} height={500} src="../logo.svg" alt="Logo with Conic" />
        </div>

        <ul className="hidden gap-14 font-roboto lg:flex text-secondary-500 font-semibold">
          <li> <a onClick={() => window.scrollTo(100, 0)}>Início</a></li>
          <li> <a onClick={() => window.scrollTo(100, 600)}>Sobre</a></li>
          <li> <a onClick={() => window.scrollTo(100, 1400)}>Depoimentos</a></li>
          <li> <a onClick={() => window.scrollTo(100, 2200)}>Quem somos</a></li>
          <li> <a onClick={() => window.scrollTo(100, 3200)}>FAQ</a></li>
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

      <section className="flex flex-col gap-5 justify-center  px-12 pt-32 items-center min-h-[600px] lg:flex-row lg:items-start lg:justify-between z-0">
        
        <div className="z-10 flex flex-col gap-5 text-xl font-league items-center text-center lg:w-5/12 lg:text-7xl lg:mt-8 lg:ml-28 lg:items-start lg:text-start">
          <p className="font-semibold text-secondary-500 lg:mt-10 lg:text-5xl lg:w-10/12 sm:text-3xl sm:mt-0">
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
          <Image className="absolute z-0 top-10 w-[1000px] ml-[-1100px] lg:top-10 lg:block sm:hidden" src="../imagemHome.svg" width={600} height={600} alt="Coinc" />
        </div>
      </section>

      <div className="flex flex-col p-5 items-center mb-2">
        <h2 className="text-secondary-500 my-2 text-xl font-semibold font-league lg:text-3xl">Transformando dados em
        <span className="pl-2 text-primary-700">gráficos claros & acessíveis</span>
        </h2>
      </div>     
      <div className="flex flex-col p-5 items-center mb-2">
        <Image className="z-0 right-52 top-10 w-[600px] lg:w-[1300px] lg:right-0 lg:top-0" src="../sobre-nos.svg" width={600} height={600} alt="Sobre nós" />
      </div>
      <section className="bg-neutral-100">
        <div className="flex flex-col p-5 items-center mb-2">
          <h2 className="text-secondary-500 my-2 text-xl font-semibold font-league lg:text-3xl">Depoimentos</h2>
          <h3 className="text-xl mb-8 text-[#6B767E] font-sembold hidden lg:block">Veja o que alguns usuários estão falando sobre o Coinc!</h3>
          <Carousel
            images={images}
          />
          <div className="justify-around gap-5 hidden lg:flex ">
            <ul className="list-none flex gap-5">
            {images.map((image) => (
              <li className="" key={image.id}>
              <div>
                <Image className="shadow rounded-full w-52 ml-24" src={image.imgPath} width={500} height={500} alt="" />
              <div className="justify-around hidden lg:flex bg-white h-60 w-[400px] mt-[-100px] rounded-xl">
                <Image className="w-7" src="../quota.svg" width={70} height={70} />
              </div>
              <div className="justify-around hidden lg:flex bg-white h-48 w-[400px] mt-[-100px] rounded-t-xl">
                <p className="text-lg m-8 text-[#6B767E] text-center font-sembold hidden lg:block">{image.text}</p>
              </div>
              <div className="justify-around hidden lg:flex bg-white h-5 w-[400px]">
              <div className="justify-around hidden lg:flex bg-zinc-200 h-[2px] w-[300px] rounded-2xl"></div>
              </div>
              <div className="justify-around hidden lg:flex bg-white h-15 w-[400px]">
                <h3 className="text-2xl m-1 text-black text-center font-bold hidden lg:block"><span className={hind.className}>{image.name}</span></h3>
              </div>
              <div className="justify-around hidden lg:flex bg-white h-16 w-[400px] rounded-b-xl">
                <p className="text-sm text-[#6B767E] text-center font-sembold hidden lg:block">{image.profLocal}</p>
              </div>

              </div>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
      <div className="flex flex-col p-5 items-center mb-2 h-[900px]">
        <h2 className="text-secondary-500 my-2 text-xl font-semibold font-league lg:text-3xl mb-7">Quem somos?</h2>
        <div className="w-[1243px] h-[460px] p-8 bg-emerald-500 rounded-[20px] shadow flex-col justify-center items-start gap-6 inline-flex">
        <div className="text-white text-2xl font-semibold leading-loose">Nossa companhia</div>
        <div className="w-[904px] text-white text-xl font-medium leading-7">Somos a empresa líder em tecnologia financeira, destacando-se pela inovação em uma aplicação web para gestão pessoal de finanças. Nossa plataforma fundada em 2023 oferece uma experiência intuitiva e recursos poderosos, permitindo aos usuários controlar despesas, planejar orçamentos e monitorar investimentos de maneira eficaz e acessível. A segurança é uma prioridade, assegurando a proteção dos dados financeiros dos usuários, e a personalização da experiência do usuário permite a adaptação da aplicação às necessidades específicas de cada indivíduo.</div>
        <div className="w-[904px] h-[108px] justify-start items-center gap-6 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xl font-medium leading-7">Missão</div>
            <div className="w-[246px] text-center text-white text-base font-normal leading-normal">Disponibilizar a melhor experiência de usuário para o controle financeiro.</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xl font-medium leading-7">Visão</div>
            <div className="self-stretch text-center text-white text-base font-normal leading-normal">Naturalizar responsabilidade financeira melhorando a qualidade de vida dos usuários.</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xl font-medium leading-7">Valores</div>
            <div className="w-[226px] text-center text-white text-base font-normal leading-normal">Facilidade de acesso, segurança de dados sensíveis, e usabilidade.</div>
          </div>
        </div>
      </div>
      <div className="w-[926px] h-[226px] justify-start items-start gap-8 inline-flex mt-[20px] mr-[320px]">
        <div className=" flex-col justify-start items-start gap-2.5 inline-flex">
          <img className="w-[287.33px] h-[226px] rounded-[20px]" src="../peopletalking1.svg" />
        </div>
        <img className="w-[287.33px] h-[226px] rounded-[20px]" src="../peopletalking2.svg" />
        <img className="w-[287.33px] h-[226px] rounded-[20px]" src="../peopletalking3.svg" />
      </div>
      <div className="w-[501px] h-[662px] absolute ml-[1180px] mt-32 bg-gradient-to-b from-green-950 to-white rounded-[20px]">
        <img className="w-[501px] h-[662px] rounded-[20px]" src="../image4.svg" />
      </div>
      </div>
      </section>

      <section className="bg-neutral-100 px-4 lg:px-20 lg:py-10">
      <div className="flex flex-col p-5 items-center mb-[100px] h-[950px]">
      <div className="w-[1040px] h-[1059px] flex-col justify-start items-start gap-[51px] inline-flex">
        <div className="flex-col justify-start items-center gap-[51px] flex">
        <h2 className="text-secondary-500 my-2 text-xl font-semibold font-league lg:text-3xl mb-7">Perguntas frequentes</h2>
          <div className="h-[356px] flex-col justify-start items-start gap-8 flex">
            <div className="bg-white rounded-[5px] shadow flex-col justify-center items-center flex">
              <div className="w-[1040px] h-[65px] p-4 shadow justify-between items-center inline-flex">
                <div className="text-center text-slate-900 text-base font-normal leading-normal">Qual o preço do plano do COINC?</div>
                <div className="w-[26px] h-[26px] relative origin-top-left rotate-90" />
              </div>
            </div>
            <div className="bg-white rounded-[5px] shadow flex-col justify-center items-center flex">
              <div className="w-[1040px] h-[65px] p-4 shadow justify-between items-center inline-flex">
                <div className="text-center text-slate-900 text-base font-normal leading-normal">Como recupero minha senha?</div>
                <div className="w-[26px] h-[26px] relative origin-top-left rotate-90" />
              </div>
            </div>
            <div className="bg-white rounded-[5px] shadow flex-col justify-center items-center flex">
              <div className="w-[1040px] h-[65px] p-4 shadow justify-between items-center inline-flex">
                <div className="text-center text-slate-900 text-base font-normal leading-normal">Qual a melhor forma de eu guardar meu dinheiro?</div>
                <div className="w-[26px] h-[26px] relative origin-top-left rotate-90" />
              </div>
            </div>
            <div className="bg-white rounded-[5px] shadow flex-col justify-center items-center flex">
              <div className="w-[1040px] h-[65px] p-4 shadow justify-between items-center inline-flex">
                <div className="text-center text-slate-900 text-base font-normal leading-normal">Quais são as políticas do Coinc em relação a Lei Geral de Proteção de Dados Pessoais 13.709/2018?</div>
                <div className="w-[26px] h-[26px] relative origin-top-left rotate-90" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[514px] p-4 bg-white rounded-[5px] shadow flex-col justify-start items-center gap-6 flex">
          <div className="text-center text-slate-900 text-2xl font-semibold leading-loose">Outras dúvidas e sugestões</div>
          <div className="text-center"><span className="text-slate-900 text-base font-normal leading-normal">Envie suas dúvidas ou sugestões para a equipe </span><span className="text-emerald-500 text-base font-bold leading-normal">COINC</span><span className="text-slate-900 text-base font-normal leading-normal"> preenchendo os campos abaixo:</span></div>
          <div className="self-stretch h-[378px] flex-col justify-start items-start flex">
            <div className="w-[1008px] h-[74px] justify-center items-center inline-flex">
              <div className="w-[1008px] h-[74px] relative flex-col justify-start items-start flex">
                <div>
                  <input type="text" id="first_name" className="bg-white border border-gray-500 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[1000px] p-2.5 mb-[25px]" placeholder="Insira seu nome" required/>
                </div>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                  </div>
                  <input type="text" id="input-group-1" className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[1000px] ps-10 p-2.5" placeholder="name@email.com"/>
                </div>
                <div>
                <textarea id="message" rows="4" className="block p-2.5 w-[1000px] text-sm text-gray-900 bg-white rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500" placeholder="Escreva aqui"></textarea>                
                </div>
                <div className="pl-[908px] mt-5">
                <Button
                  className='border bg-secondary-500 py-3 text-white rounded-lg'
                >
                  Enviar
                </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>

      <footer className="bg-green h-16 mt-[-40px] text-center w-full">
        <h3 className="text-white my-2 text-lg mt-5 font-league">Desenvolvido por <span className="text-indigo-950">COINC TEAM</span></h3>
      </footer>
    </div>
    </>
  )
}
