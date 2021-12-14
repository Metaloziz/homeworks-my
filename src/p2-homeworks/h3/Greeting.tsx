import React, {ChangeEvent} from 'react'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any ++
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any++
    addUser: () => void // need to fix any ++
    error: string // need to fix any ++
    totalUsers: number // need to fix any ++
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = `${s.inputNotError} ${error ? s.inputError : ''}`  // need to fix with (?:) ++

    return (
        <div className={s.divContainer}>
            {/*<input value={name} onChange={setNameCallback} className={inputClass} placeholder={'What is your name?'}/>*/}
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                // className={inputClass}
                placeholder={'What is your name?'}
                error={error}
            />
            {/*<button className={s.buttonAddUser} onClick={addUser}>Add</button>*/}
            <SuperButton onClick={addUser} disabled={!!error}>Add</SuperButton>
            <span className={s.totalUsers}>{totalUsers}</span>
            {/*<div className={s.errorMessage}>{error}</div>*/}
        </div>
    )
}

export default Greeting
