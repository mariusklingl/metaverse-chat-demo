import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ReactTimeAgo from 'timeago-react'
import de from 'javascript-time-ago/locale/de'
import TimeAgo from 'javascript-time-ago'

TimeAgo.addDefaultLocale(de)
TimeAgo.setDefaultLocale(de)

function Message({ message }) {

  


    const { user } = useMoralis()
    const isUserMessage = message.get('ethAddress') === user.get('ethAddress')
    console.log(de)
    return (
        <div className={`flex space-x-2 items-end relative ${isUserMessage && 'justify-end'
            }`}>
            <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'
                }`} >
                <Avatar username={message.get('username')} />
            </div>
            <div className={`flex space-x-4 p-3 rounded-lg ${isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-bl-none bg-blue-500'}`}>
                <p>{message.get('message')}</p>
            </div>
            <ReactTimeAgo  datetime={message.createdAt} className={`text-[10px] italic text-gray-400 ${isUserMessage && 'order-first pr-1'
                }`} />
            <p className={`absolute -bottom-5 text-xs ${isUserMessage ? 'text-pink-300' : 'text-blue-500'
                }`}>{message.get('username')}</p>
        </div>
    )
}

export default Message