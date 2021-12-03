import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any ++++++++++++++++++++++++
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any+++++++++++++++++++++++++
    addUser: () => void // need to fix any +++++++++++++++++++++++++++
    error: string // need to fix any++++++++++++++++++++++
    totalUsers: number // need to fix any +++++++++++
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:) ++++++++++++++++

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} placeholder={'What is your name?'}/>
            <button className={s.buttonAddUser} onClick={addUser}>Add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
