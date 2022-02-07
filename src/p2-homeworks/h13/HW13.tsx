import React, {ReactElement, useState} from "react";
import {requestAPI} from "./dal/requestAPI";
import style from './HW13.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {AxiosError} from "axios";
import {Request} from "./Request/Request";

export const Hw13 = (): ReactElement => {

    let [data, setData] = useState<string>('')
    let [value, setVale] = useState<boolean>(false)

    let changeInputValue = () => {
        setVale(!value)
    }

    const callBack = () => {

        requestAPI.postRequest(value)
            .then((state) => {
                setData(state.data.info)
            })
            .catch((error) => {
                setData(error.response.data.info)
            })
    }

    return (<div>
            <hr/>
            <span className={style.title}>homeworks 13</span>
            <div className={style.common}>
                <input type={"checkbox"}
                       value={value.toString()}
                       onChange={changeInputValue}/>
                <SuperButton onClick={callBack}>Request</SuperButton>
                <Request data={data}/>
            </div>
            <hr/>
        </div>
    );
};
