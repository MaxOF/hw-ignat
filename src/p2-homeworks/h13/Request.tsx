import React, {ChangeEvent, useEffect, useState} from 'react';
import {requestAPI} from "./dal/requestAPI";

export const Request = () => {
    const [box, setBox] = useState<boolean>(false)
    const [state, setState] = useState<any>()

    useEffect(() => {
        if (box){
            requestAPI.requestPost(box)
                .then(res => {
                    setState(res.data.errorText)
                })
                .catch(err => {
                    setState( err.response ? err.response.data.errorText : err.message );
                })
        }
    }, [box])

    const onClickHandler = () => {
        setBox(!box)
    }

    return (
        <>
            <button onClick={onClickHandler}>Try to press</button>
            <input type='checkbox' checked={box}/>
            <div>{state}</div>
        </>
    );
};
