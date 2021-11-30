import React, {useState} from 'react'
import {Affairs} from './Affairs'
import s from './Affairs.module.css'

export type AffairPriorityType = Array<AffairType>
export type AffairType = {
    _id: number
    name: string
    priority: FilterType
}
export type FilterType = 'all' | 'high' | 'low' | 'middle'

const defaultAffairs: AffairPriorityType = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'}
]

export const filterAffairs = (affairs: AffairPriorityType, filter: FilterType): AffairPriorityType => {
    if (filter === 'all') {
        return affairs
    } else return affairs.filter(item => item.priority === filter)
}

export const deleteAffair = (affairs: AffairPriorityType, _id: number): AffairPriorityType => {
    return affairs.filter(item => item._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairPriorityType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
    return (
        <div>
            <span className={s.title}>homeworks 2 </span>

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
        </div>
    )
}

export default HW2
