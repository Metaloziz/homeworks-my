import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    console.log(new Date().toLocaleString('ru',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }))

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString()// fix with date
    const stringDate = new Date().toLocaleString('ru',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }) // fix with date

    return (
        <div className={s.dataAndButton}>
            <div className={s.data}>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {stringTime}
                </div>

                {show && (<div>{stringDate}</div>)}
            </div>
            <div className={s.SuperButton}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
