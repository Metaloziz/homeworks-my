import React from 'react'
import {PATH} from "./RoutesIgnat";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={({isActive}) => isActive ? s.active : ''} >{PATH.PRE_JUNIOR}</NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={({isActive}) => isActive ? s.active : ''} >{PATH.JUNIOR}</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={({isActive}) => isActive ? s.active : ''} >{PATH.JUNIOR_PLUS}</NavLink>
        </div>
    )
}

export default Header
