import React, {useState} from 'react'
import s from './AlternativeSuperSelect.module.css'


export type dataPT = {
    data: string[]
    value: string
    onChangeOption: (value: string) => void
}


export type statePT = {
    title: string
    setTitle: (title: string) => void
    collapsed: boolean
    setCollapsed: (value: boolean) => void
    hover: string
    setHover: (value: string) => void
}


const AlternativeSuperSelect = ({data, onChangeOption, value}: dataPT) => {


    document.onclick = (event) => {

        // @ts-ignore
        if (!document.getElementById('select')?.contains(event.target)) {
            console.log('miss')
            setCollapsed(false)
        }
    } // need to do with useEffect

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const collapsedCB = () => {
        setCollapsed(!collapsed)
    }
    const callback2 = (title: string) => {
        onChangeOption(title)
        setCollapsed(!collapsed)
    }
    const callback3 = (title: string) => {
        onChangeOption(title)
    }

    const callback4 = () => {
        onChangeOption(value)
    }


    return (
        <div id={'select'} className={s.body}>
            <div className={s.title} onClick={collapsedCB}>{value}</div>
            <div className={s.items}>
                {collapsed && data.map(l => <div className={value === l ? s.pick : ''}
                                                 onMouseEnter={() => callback3(l)}
                                                 onClick={() => callback2(l)}
                >{l}</div>)
                }

            </div>
        </div>
    );
};

export default AlternativeSuperSelect