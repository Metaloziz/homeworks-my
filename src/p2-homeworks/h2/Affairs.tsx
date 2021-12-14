import React from 'react'
import Affair from './Affair'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {AffairPriorityType, AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairPriorityType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

export function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div>
            <div className={s.listDivBody}>
                {mappedAffairs}
            </div>
            <div className={s.diveButtonFilter}>
                <SuperButton className={s.buttonFilter} onClick={setAll}>All</SuperButton>
                <SuperButton className={s.buttonFilter} onClick={setHigh}>High</SuperButton>
                <SuperButton className={s.buttonFilter} onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={s.buttonFilter} onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}