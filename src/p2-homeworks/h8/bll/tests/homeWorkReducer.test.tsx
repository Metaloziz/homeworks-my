import {homeWorkReducer, sortAgeAC, sortDownAC, sortUpAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]  // need to fix any
let newState: UserType[]  // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    newState = homeWorkReducer(initialState, sortUpAC())


    console.log(newState)
    expect(newState).not.toBe(initialState) // Объекты не должны быть равны т.е. одним и тем же
    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].name).toBe('Кот')

})
test('sort name down', () => {

    newState = homeWorkReducer(initialState, sortDownAC())

    console.log(newState)
    expect(newState).not.toBe(initialState)
    expect(newState.length).toBe(6)
    expect(newState[5].name).toBe('Александр')
    expect(newState[0].name).toBe('Кот')
})
test('check age more 18', () => {
    newState = homeWorkReducer(initialState, sortAgeAC(18))

    expect(newState).not.toBe(initialState)
    expect(newState.length).toBe(4)
    expect(newState[0].age > 18).toBeTruthy()
    expect(newState[2].age > 18).toBeTruthy()

})
