'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RoutesHandler = ({ children }) => {
  const router = useRouter();

    const myFunction = async () => {
        const refreshTokenObject = {
            refreshToken : '',
        }
        const response = await fetch(`https://coinc-backend-8d1196b671ee.herokuapp.com/auth/verify-refresh-token`,
        {
            cache: 'no-store',
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(refreshTokenObject)
        }
        )
    
        console.log(response)
    
        const userIsAuthenticated = /* Sua lógica de autenticação aqui */ false;
    
        if (!userIsAuthenticated) {
          router.push('../login');
        }
    };

    useEffect(() => {
        myFunction();
    });

  return children;
};

export default RoutesHandler;