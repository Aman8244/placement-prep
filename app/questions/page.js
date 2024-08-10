"use client"
import Navbar from '@/components/Navbar'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Questions = () => {
  const searchparams = useSearchParams();
  const role = searchparams.get("role");
  
  return (
    <main>
        <Navbar/>
        <div>
            {role}
        </div>
    </main>
  )
}

export default Questions