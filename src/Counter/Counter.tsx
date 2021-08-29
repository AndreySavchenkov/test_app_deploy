import React from "react";
import {Display} from "./Display/Display";
import {Buttons} from "./Buttons/Buttons";
import s from './Counter.module.css'

type CounterPropsType = {
    maxValue: number
    startValue: number
    count: number
    setCount: (value:any) => void
}

export const Counter = (props: CounterPropsType) => {

    const changeHandler = () => {
        if(props.count < props.maxValue) {
            props.setCount(props.count + 1)
        }
    }

    const resetHandler = () => {
        props.setCount(props.startValue)
    }

    return(
        <div className={s.wrapper}>
            <Display maxValue={props.maxValue} count={props.count}/>
            <Buttons maxValue={props.maxValue} startValue={props.startValue} count={props.count} changeHandler={changeHandler} resetHandler={resetHandler}/>
        </div>
    )
}