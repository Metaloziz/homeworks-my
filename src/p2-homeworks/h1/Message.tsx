import React from 'react'
import s from './Message.module.css'

type messageDataPT = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = ({message,name,time,avatar}: messageDataPT) => {
    return (
        <div className={s.post}>
            <div className={s.ava}>
                <div className={s.back}>
                    <img alt={"ava"} src={avatar}/>
                </div>
            </div>
            <div className={s.block}>
                <div className={s.name}>{name}</div>
                <div className={s.message}>{message}</div>
                <div className={s.time}>{time}</div>
            </div>
        </div>
    )
}


