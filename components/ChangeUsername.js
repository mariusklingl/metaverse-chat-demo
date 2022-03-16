import React from 'react'
import { useMoralis } from 'react-moralis'

function ChangeUsername() {
    const {setUserData, userError, isUserUpdating , user} = useMoralis()

    const setUsername = () => {
        const username = prompt(`Enter your new username (current: ${user.getUsername()}`)
        if(!username) return
        setUserData({
            username
        })
    }

  return (
    <div className='text-sm absolute top-5 right-5'>
        <button onClick={setUsername} disabled={isUserUpdating} className='hover:text-pink-700'>Change Username</button>
    </div>
  )
}

export default ChangeUsername