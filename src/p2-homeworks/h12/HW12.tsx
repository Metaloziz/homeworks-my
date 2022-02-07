import React from "react";
import style from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {setThemeAC} from "../h10/bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import AlternativeSuperSelect from "../h7/common/c5-SuperSelect/AlternativeSuperSelect";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(store=>store.theme.theme); // useSelector

    const dispatch = useDispatch()

   const onChangeOption = (value: string) => {
       dispatch(setThemeAC(value))
   }

    return (
        <div className={` ${style.common} ${style[theme]} `}>
            <hr/>
            <span className={style[theme + '-text']}>
               <span className={style.title}>homeworks 12</span>
            </span>

            <div className={style.select}>

            {/*<AlternativeSuperSelect data={themes} value={theme} onChangeOption={onChangeOption}/>*/}
                <SuperSelect options={themes} value={theme} onChangeOption={onChangeOption}/>

            </div>
        </div>
    );
}

export default HW12;
