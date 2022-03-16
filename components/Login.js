import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

export default function Login() {

  const {authenticate} = useMoralis()


  return (
    <div className='bg-black relative'>
       <div className='absolute flex flex-col z-10 space-y-4 h-4/6 w-full items-center justify-center'>
         <Image className='object-cover rounded-full' src='https://links.papareact.com/3pi' height={200} width={200}/>
         <button onClick={authenticate} className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'>Login to METAVERSE</button>
       </div>
       <div className='w-full h-screen'>
         <Image src="https://links.papareact.com/55n" layout='fill' objectFit='cover'/>
       </div>
    </div>
  )
}