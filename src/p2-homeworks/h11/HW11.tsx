import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(10)
    const [value2, setValue2] = useState<number | number[]>([value1, 70])

    const onChangeSuperRange = (value: number | number[]) => {
        setValue2(value as number[])
    }
    const onChangeRange = (value: number | number[]) => {
        setValue1(value as number)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeRange}
                />
            </div>

            <div>
                <span>{value2}</span>
                <SuperDoubleRange
                    value={value2}
                    onChangeSuperRange={onChangeSuperRange}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
