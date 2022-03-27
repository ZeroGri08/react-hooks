import React, {useState} from 'react'
import './counter.css'
export const CounterApp = () => {

    const [state, setState] = useState( 
        {
        counter1: 10,
        counter2: 20
        }
        );
        const {counter1, counter2} = state;
        //console.log(counter)
  return (
    <>
    {<h1>CounterApp1 {counter1}</h1>}
    {<h1>CounterApp2 {counter2}</h1>}
    <hr></hr>
    <buttton className="btn btn-primary"
    onClick = { () => {
        setState(
            {
                //operdor state, para conservar valores del objeto y cambiar el especifico
                ...state,
                counter1: counter1 + 1
            }
            );

    }}
    >
        +1
    </buttton>
    </>
  )
}
