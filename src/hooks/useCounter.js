import React, {useState} from 'react'

export const useCounter = ( initialState = 10) => {
  const [state, setState] = useState(initialState);

  const increment = ( factor = 1) => {
      setState(state +factor);
  }

  const decrement = (factor = 1) =>{
      setState(state -factor);
  }

  const reset = () =>{
    setState(initialState);
}

  //Para regresar la accion que se ocupa (increment o decrement)
  return  {
      state,
      increment,
      decrement,
      reset
  };
}
