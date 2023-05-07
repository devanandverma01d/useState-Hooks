import React, { useReducer } from 'react'

const UseReducer = () => {
  const initialValue=0;
  const reducer=(currentState,action)=>{
    switch(action){
      case 'INCREMENT':
        return currentState+1;
      case 'DECREMENT':
        return currentState-1;
      case 'RESET':
        return initialValue;
      default:
        return currentState;
    }
  }

  const[newState,dispatch]=useReducer(reducer,initialValue)
  return (
    <>
        <h1>{newState}</h1> 
        <button type='button' onClick={()=>dispatch('INCREMENT')}>Increment</button>
        <button type='button' onClick={()=>dispatch('DECREMENT')}>decrement</button>
        <button type='button' onClick={()=>dispatch('RESET')}>Reset</button>
    </>
  )
}

export default UseReducer;
