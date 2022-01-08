import React, {MouseEvent, useState} from 'react'
import {NavLink} from "react-router-dom";


import s from './Header.module.css'


function Header() {

    return (
        <div className={s.header}>

            <div>
                <NavLink to={'/pre-junior'} className={s.link}>Pre-junior</NavLink>
                <NavLink to={'/junior'} className={s.link}>Junior</NavLink>
                <NavLink to={'/junior-plus'} className={s.link}>Junior-plus</NavLink>
            </div>
            <button className={s.button}>Menu</button>

        </div>
    )
}

export default Header
