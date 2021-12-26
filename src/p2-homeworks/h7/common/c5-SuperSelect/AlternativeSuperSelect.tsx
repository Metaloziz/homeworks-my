import React, {KeyboardEvent, useState} from 'react'
import s from './AlternativeSuperSelect.module.css'

export type dataPT = {
    data: string[]
    value: string
    onChangeOption: (value: string) => void
}

const AlternativeSuperSelect = ({data, onChangeOption, value}: dataPT) => {

    document.onclick = (event) => {
        if (!document.getElementById('select')?.contains(event.target as Node)) {
            console.log('miss')
            setCollapsed(false)
        }
    } // need to do with useEffect

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const collapsedCB = () => setCollapsed(!collapsed)
    const selectItemCB = (newValue: string) => {
        onChangeOption(newValue)
        setCollapsed(!collapsed)
    }
    const onMouseEnterCB = (title: string) => onChangeOption(title)       // выбор при наведении больше нравиться

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        let index = data.indexOf(value)
        switch (e.key) {
            case 'ArrowDown':
                data[index + 1] && onChangeOption(data[index + 1])
                break
            case 'ArrowUp':
                data[index - 1] && onChangeOption(data[index - 1])
                break
            case 'Enter':
                setCollapsed(false)
                break
            case 'Escape' :
                setCollapsed(false)
        }
        console.log(e.key)
    }

    return (
        <div id={'select'} className={s.body} onKeyUp={onKeyUp}>
            <div className={s.title} onClick={collapsedCB} tabIndex={0}>{value}</div>
            <div className={s.items}>
                {collapsed && data.map((l, i) => <div key={i} className={value === l ? s.pick : ''}
                                                      onMouseEnter={() => onMouseEnterCB(l)}
                                                      onClick={() => selectItemCB(l)}
                >{l}</div>)
                }
            </div>
        </div>
    );
};

export default AlternativeSuperSelect