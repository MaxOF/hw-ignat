import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    let mappedOptions: any[] = []

    if (options) {
        mappedOptions = options.map((select, index)=> {
            return <option key={index} value = {select} >{select}</option>
        }); // map options with key
    }


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        debugger
        // onChange, onChangeOption
        onChange && onChange(e)
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }

    return (
            <select onChange={onChangeCallback} {...restProps} className={s.superSelect}>
                {mappedOptions}
            </select>
    )
}

export default SuperSelect
