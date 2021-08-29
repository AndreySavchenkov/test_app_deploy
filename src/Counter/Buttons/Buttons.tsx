import React from "react";
import s from '../Counter.module.css'
import {Button} from "../Button/Button";

type ButtonsPropsType = {
    count: number
    changeHandler: () => void
    resetHandler: () => void
    maxValue: number
    startValue: number
}

export const Buttons = (props: ButtonsPropsType) => {
    // @ts-ignore
    return (
        <div className={s.buttons}>
            <Button title={'inc'} disabled={props.count >= props.maxValue} onClick={props.changeHandler}/>
            <Button  title={'reset'} disabled={props.count === props.startValue} onClick={props.resetHandler} />
        </div>
    )
}