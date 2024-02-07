'use client'

import SideMenu from "@/components/SideMenu"
import Header from "@/components/Header"
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from "react"
import ModalCookie from "@/components/ModalCookie"
import RoutesHandler from "@/Utils/Handles/Routes/routesHandler";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

  export default function RootLayout({ children }) {
    const colors = ["bg-primary-700", "bg-secondary-700", "bg-tertiary-700"];
    const router = useRouter();
    const randomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const selectedColor = colors[randomIndex];
      return selectedColor
    }
    const [color, setColor] = useState(colors[0]);
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showChildren, setShowChildren] = useState(false);
    useEffect(() => {
      const fetchUserData = async () => {
        try{
        const tokensJson = JSON.parse(localStorage.getItem('actk'));
        const token = tokensJson.access_token;
        
        const decoded = jwtDecode(token);
  
        const user = await fetch(`https://coinc-backend.onrender.com/user/${decoded.userId}`,
        {
            cache: 'no-store',
            method: 'GET',
            headers: {
            "Content-Type": "application/json",
            }
        }
        )
        const response =  await user.json();
        console.log(response)
        setUserName(response.firstName);
        
    }catch{
      router.push('../login');
    }finally{
      setLoading(false);
      setTimeout(() => {
        setShowChildren(true);
      }, 1000);
    }}
      fetchUserData();
      setColor(randomColor());
    },[router]);

    return (
        <div className="flex bg-main">
            <SideMenu/>
            <ModalCookie/>
            <RoutesHandler>
            <div className="flex flex-col w-full">
              <Header title="Carteira" name={userName} color={color}/>
              {!loading && showChildren ? children : null}
            </div>
            </RoutesHandler>
        </div>
    )
  }
