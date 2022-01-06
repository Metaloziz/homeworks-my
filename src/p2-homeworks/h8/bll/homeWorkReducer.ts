import {UserType} from "../HW8";

export type ActionPT = sortUpACPT | sortDownACPT | sortAgeACPT

type sortUpACPT = ReturnType<typeof sortUpAC>
type sortDownACPT = ReturnType<typeof sortDownAC>
type sortAgeACPT = ReturnType<typeof sortAgeAC>


const SORT_UP = 'SORT_UP'
const SORT_DOWN = 'SORT_DOWN'
const SORT_AGE = 'SORT_AGE'

export const sortUpAC = () => ({type: SORT_UP} as const)
export const sortDownAC = () => ({type: SORT_DOWN} as const)
export const sortAgeAC = (age: number) => ({type: SORT_AGE, age} as const)

export const homeWorkReducer = (state: UserType[], action: ActionPT): UserType[] => { // need to fix any
    let copy = [...state]
    switch (action.type) {
        case SORT_UP:
            return copy.sort((a, b) => a.name.localeCompare(b.name))
        case SORT_DOWN:
            return copy.sort((a, b) => a.name.localeCompare(b.name)).reverse()
        case SORT_AGE:
            return copy.filter(item => item.age > action.age)
        default:
            return state
    }
}