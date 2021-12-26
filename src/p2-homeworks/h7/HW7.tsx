import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'
import AlternativeSuperSelect from "./common/c5-SuperSelect/AlternativeSuperSelect";
import AlternativeSuperRadio from "./common/c6-SuperRadio/AlternativeSuperRadio";

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState<string>(arr[0])
    console.log(value)

    return (
        <div>
            <hr/>
            <span className={s.title}>homeworks 7</span>
            <div className={s.main}>
                {/*should work (должно работать)*/}
                <div>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <div className={s.main2}>
                <AlternativeSuperSelect data={arr} value={value} onChangeOption={onChangeOption}/>
                <AlternativeSuperRadio/></div>
            <hr/>
        </div>
    )
}

export default HW7
