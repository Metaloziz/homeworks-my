import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    // let newStyle = props.affair.priority === 'high' ? s.high : props.affair.priority == 'middle' : s.middle ? props.affair.priority == 'low' ? s.low : '';

    let newStyle = props.affair.priority === 'high' ? s.high : props.affair.priority === 'low' ? s.low : s.middle;

    return (

            <div className={s.divBody}>
                <div className={s.name}>{props.affair.name}</div>
                <div className={newStyle}>{props.affair.priority}</div>
                <button onClick={deleteCallback}>X</button>
            </div>


    )
}

export default Affair
