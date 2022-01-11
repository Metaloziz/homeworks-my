import React from 'react'
import Clock from './Clock'
import s from "./HW9.module.css"

function HW9() {
    return (
        <div>
            <hr/>
            <span className={s.title}>homeworks 9</span>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
