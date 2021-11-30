import React from 'react'
import style from './Message.module.css'

type messageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = (props: messageDataPropsType) => {
    return (
        <div className={style.post}>
            <div className={style.ava}>
                <div className={style.back}>
                    <img alt={"ava"} src={props.avatar}/>
                </div>
            </div>

            <div className={style.block}>
                <div className={style.name}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}


