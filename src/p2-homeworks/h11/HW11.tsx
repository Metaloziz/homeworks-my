import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            <span className={s.title}>homeworks 11</span>

            {/*should work (должно работать)*/}
            <div className={s.body}>
                <div>
                    <span>{value1}</span>
                    <SuperRange value={value1} onChangeRange={setValue1}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div>
                    <span>{value1}</span>
                    <SuperDoubleRange value={[value1, value2]}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <div><span>{value2}</span></div>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
