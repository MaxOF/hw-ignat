import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, InitStateType, ThemeType} from "./bll/themeReducer";



function HW12() {

    const {currentTheme, themes} = useSelector<AppStoreType, InitStateType>(state => state.theme)
    const dispatch = useDispatch()

    // useDispatch, onChangeCallback
    const onChangeCallback = (currentTheme: ThemeType) => {
        dispatch(changeThemeAC(currentTheme))
    }


    return (
        <div className={s[currentTheme]}>
            <hr/>
            <span className={s[currentTheme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect
                options={themes}
                value={currentTheme}
                onChangeOption={onChangeCallback}
            />
            <SuperRadio
                name={'radio'}
                options={themes}
                value={currentTheme}
                onChangeOption={onChangeCallback}
            />

            <hr/>
        </div>
    );
}

export default HW12;
