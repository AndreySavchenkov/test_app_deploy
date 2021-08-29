import React from "react";
import s from '../Counter.module.css'

type InputPropsType = {
    title: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const Input = (props: InputPropsType) => {
    return(
        <div className={s.input_wrapper}>
            <span>{props.title}</span>
            <input className={s.input} type="number" onChange={props.onChange}/>
        </div>
    )
}