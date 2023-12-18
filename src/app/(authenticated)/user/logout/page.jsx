"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';

const Logout = () => {
    const router = useRouter()

    const clearStorage = () => {
        localStorage.removeItem("actk");
        router.push('../login')
    }
    useEffect(() => {
        clearStorage();
    },[]);

    return (
        <>
        </>
    )
}

export default Logout