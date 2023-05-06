// Case 1.---> 
//             Use the state variable in the rendered component.

import React, { useState } from 'react'

export const CaseOne = () => {
  //2.1 Hooks area
  const[color,setColor]=useState("White")
  //2.2 function definition area
  //2.3 Return statement
  return (
    <>
      <h1>My favorite color is {color}!</h1>
    </>
  )
}

