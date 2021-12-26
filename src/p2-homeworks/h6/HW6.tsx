import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from "../h6/HW6.module.css";

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        if (value) {
            saveState<string>('editable-span-value', value)
            setValue('')
        }
    }
    const restore = () => {
        let oldValue: string = restoreState('editable-span-value', '')
        setValue(oldValue)
    }

    return (
        <div>
            <hr/>
            <span className={s.title}> homeworks 6 </span>

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
