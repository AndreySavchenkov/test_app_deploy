import React from "react";
import s from '../Counter.module.css'

type DisplayPropsType = {
    count: number
    maxValue: number
}

export const Display = (props: DisplayPropsType) => {
    return(
        <div className={ props.count === props.maxValue ? s.maxValue : s.display}>
            <div>{props.count}</div>
        </div>
    )
}