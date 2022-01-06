import React, {useState} from 'react'
import {ActionPT, homeWorkReducer, sortAgeAC, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW8.module.css"

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p) => (
        <div key={p._id}>
            <div className={s.people}>
                <span>{p.name}</span><span>{p.age}</span>
            </div>
        </div>
    ))

    const sortPeople = (action: ActionPT) => setPeople(homeWorkReducer(initialPeople, action))

    return (
        <div>
            <hr/>
            <span className={s.title}>homeworks 8</span>

            {/*should work (должно работать)*/}
            {finalPeople}
            <div style={{display: "flex"}}>
                <div><SuperButton onClick={() => sortPeople(sortUpAC())}>sort up</SuperButton></div>
                <div><SuperButton onClick={() => sortPeople(sortDownAC())}>sort down</SuperButton></div>
                <div><SuperButton onClick={() => sortPeople(sortAgeAC(40))}>check 18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <hr/>
        </div>
    )
}

export default HW8
