import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Button} from "./Counter/Button/Button";
import {Input} from "./Counter/Input/Input";
import s from './Counter/Counter.module.css'


function App() {

    let [maxValue, setMaxValue] = useState<number>(0);
    let [startValue, setStartValue] = useState<number>(0)
    let [count, setCount] = useState<number>(startValue)



    const addMaxValue = (e: React.FormEvent<HTMLInputElement>) => {
        const newMaxValue = +e.currentTarget.value;
        localStorage.setItem('maxValue', JSON.stringify(newMaxValue))
        setMaxValue(newMaxValue)
    }

    const addStartValue = (e: React.FormEvent<HTMLInputElement>) => {
        const newStartValue = +e.currentTarget.value;
        localStorage.setItem('startValue', JSON.stringify(newStartValue))
        setStartValue(newStartValue)
    }

    const restartCount = () => {
        setCount(startValue)
    }


    return (
        <div className={s.megaWrapper}>

            <div className={s.wrapper}>
                <div>
                    <Input title={'start value: '} onChange={addStartValue}/>
                    <Input title={'max value: '} onChange={addMaxValue}/>
                </div>
                <div className={s.button_wrapper}>
                    <Button title={'set'} disabled={false} onClick={restartCount}/>
                </div>
            </div>


            <Counter maxValue={maxValue}
                     startValue={startValue}
                     count={count}
                     setCount={setCount}/>
        </div>
    );
}

export default App;
