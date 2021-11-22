import React from 'react'
import Affair from './Affair'
import s from 'Affairs.module.css'
import {AffairPriorityType, AffairType, FilterType} from './HW2'

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

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}