import React from 'react'

import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {

return (
    <div className={s.chat}>
        <div className={s.avatarWrappper}>
            <img className={s.avatar} src={props.avatar}/>
        </div>
        <div className={s.text}>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.time}>
                {props.time}
            </div>
        </div>
    </div>
)
}

export default Message;


