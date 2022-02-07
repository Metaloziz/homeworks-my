import React, {ReactElement, useState} from "react";
import {requestAPI} from "./dal/requestAPI";
import {Request} from "./Request/Request";
import style from './HW13.module.css'


type returnType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}

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
            }).catch((error) => {
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
                <button onClick={callBack}>Request</button>
                <div>{data}</div>
                {/*<Request data={data}/>*/}
            </div>
            <hr/>
        </div>
    );
};
