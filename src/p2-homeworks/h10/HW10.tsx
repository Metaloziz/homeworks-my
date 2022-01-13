import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css'

function HW10() {
    // useSelector,
    // //useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <span className={s.title}>homeworks 10</span>

            <div className={s.body}>{loading
                ? <img style={{all: "unset", height: '150px'}} alt={'loading'}
                       src={'https://i.gifer.com/D5Vu.gif'}/>
                : <SuperButton style={{width: '150px'}} onClick={setLoading}>set loading...</SuperButton>

            }</div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
