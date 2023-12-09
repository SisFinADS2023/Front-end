'use client'

import SideMenu from "@/components/SideMenu"
import Header from "@/components/Header"
import '../../globals.css'
import { useEffect, useState } from "react"
import ModalCookie from "@/components/ModalCookie"

  export default function RootLayout({ children }) {
    const colors = ["bg-primary-700", "bg-secondary-700", "bg-tertiary-700"];
    const randomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const selectedColor = colors[randomIndex];
      return selectedColor
    }
    const [color, setColor] = useState(colors[0]);
    useEffect(() => {
        setColor(randomColor());
    });
    return (
        <div className="flex bg-main">
            <SideMenu/>
            <ModalCookie/>
            <div className="flex flex-col w-full">
              <Header title="Carteira" name="Maria de Lurdes" color={color}/>
              
              {children}
            </div>
        </div>
    )
  }