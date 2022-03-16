import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

function Avatar({username, logOutOnPress}) {
    const {user, logout} = useMoralis()

    

  return (
    <Image 
    className='rounded-full bg-black cursor-pointer opacity-75 hover:opacity-100'
    layout='fill'
    onClick={logOutOnPress? logout : null}
    src={`https://avatars.dicebear.com/api/pixel-art/${username || user.getUsername()}.svg`}
    />
  )
}

export default Avatar