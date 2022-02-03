import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            <span className={s.title}>homeworks 11</span>
            <div className={s.body}>
                <div className={s.firstRange}>
                    <span>{value1}</span>
                    <SuperRange value={value1} onChangeRange={setValue1}/>
                </div>
                <div className={s.secondRange}>
                    <div>
                        <span>{value1}</span>
                    </div>
                    <div>
                        <SuperDoubleRange
                            onChangeRange={onChangeRange}
                            value={[value1, value2]}
                            min={0}
                            max={1000}
                            width={200}/>
                    </div>
                    <div>
                        <span>{value2}</span>
                    </div>
                </div>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
