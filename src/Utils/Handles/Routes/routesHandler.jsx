'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RoutesHandler = ({ children }) => {
  const router = useRouter();

    const myFunction = async () => {
      try{
        const refreshToken = JSON.parse(localStorage.getItem('actk'));
        const refreshTokenObject = {
            refreshToken : refreshToken.access_token,
        }
        const userIsAuthenticated = await fetch(`https://coinc-backend.onrender.com/auth/verify-refresh-token`,
        {
            cache: 'no-store',
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(refreshTokenObject)
        }
        )
        const response =  await userIsAuthenticated.json();
        
        if (!response.isValid) {
          router.push('../login');
        }
      }catch(e){
        router.push('../login');
      }
    };

    useEffect(() => {
        myFunction();
    },[]);

  return children;
};

export default RoutesHandler;
