import React from "react";
import s from "../Counter.module.css";

type ButtonPropsType = {
    title: string
    disabled: boolean
    onClick: () => void
}

export const Button = (props: ButtonPropsType) => {
    return(
        <button className={s.button} disabled={props.disabled} onClick={props.onClick}>{props.title}</button>
    )
}