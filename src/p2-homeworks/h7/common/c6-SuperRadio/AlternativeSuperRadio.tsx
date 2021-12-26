import React from 'react'
import s from './AlternativeSuperRadio.module.css'


type AlternativeSuperRadioPT = {
    data: string[]
    value: string
    onChangeOption: (value: string) => void
}

function AlternativeSuperRadio(props: AlternativeSuperRadioPT) {

    const changeValueCB = (newValue: string) => props.onChangeOption(newValue)

    return (
        <div className={s.main}>
            {props.data.map((l, i) => <div key={i} onClick={() => changeValueCB(l)}>
                <div className={s.round}>
                    {props.value === l ? <div/> : ''}
                </div>
                <div className={s.title}>{l}</div>
            </div>)}
        </div>
    )
}

export default AlternativeSuperRadio
