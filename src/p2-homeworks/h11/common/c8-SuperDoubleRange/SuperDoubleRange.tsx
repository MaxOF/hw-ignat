import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type PropsType = {
    value: number | number[]
    onChangeSuperRange: (value: number | number[]) => void
}

const minDistance = 10;

export const SuperDoubleRange = ({value, onChangeSuperRange}: PropsType) => {


    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {

        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                onChangeSuperRange([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                onChangeSuperRange([clamped - minDistance, clamped]);
            }
        } else {
            onChangeSuperRange(newValue as number[]);
        }
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={value}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                disableSwap
            />
        </Box>
    );
}