import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {
    const { user } = useMoralis()
    return (
        <div className='bg-black sticky top-0 p-5 z-50 shadow-lg border-b-2 border-pink-500'>
            <div className='text-pink-500 grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
                <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
                    <Image className='rounded-full' objectFit='cover' src='https://links.papareact.com/3pi' layout='fill' />
                </div>
                <div className='text-left lg:text-center col-span-4'>
                    <div className='relative h-48 w-48 lg:mx-auto border-8 rounded-full border-pink-500'>
                        <Avatar logOutOnPress />
                    </div>
                    <h1 className='text-3xl '>Welocme to my METAVERSE</h1>
                    <h2 className='text-5xl truncate'>{user.getUsername()}</h2>
                    <ChangeUsername/>

                </div>
            </div>
        </div>
    )
}

export default Header