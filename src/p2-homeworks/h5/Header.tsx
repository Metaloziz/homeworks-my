import React from 'react'
import {PATH} from "./RoutesIgnat";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.headerDiv}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={({isActive}) => isActive ? s.active : s.default}>PRE_JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={({isActive}) => isActive ? s.active : s.default}>JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={({isActive}) => isActive ? s.active : s.default}>JUNIOR_PLUS</NavLink>
            <div className={s.menu}>: MENU</div>
        </div>
    )
}

export default Header
