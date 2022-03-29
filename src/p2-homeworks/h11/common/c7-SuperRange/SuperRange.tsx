import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type PropsType = {
    value: number
    onChangeRange: (value: number) => void
}

export default function SuperRange(props: PropsType) {

    const onChangeHandler = (event: Event, value: number | number[], activeThumb: number) => {
        props.onChangeRange(value as number)
    }

    return (
        <Box width={300}>
            <Slider defaultValue={props.value} aria-label="Default" valueLabelDisplay="auto" onChange={onChangeHandler} />
        </Box>
    );
}