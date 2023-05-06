// Case 2.Update State-
//                     To update our state, we use our state updater function.

import React, { useState } from 'react';

export const CaseTwo=()=>{
    //2.1 Hooks area
    const[color,setColor]=useState('White')
    //2.2 Definition area
    const handleUpdate=()=>{
        setColor("Black")

        // setTimeout(()=>{
        //     setColor("White")
        // },2000)
    }
    return(
        <>
            <h1>My favorite color is {color}!</h1>
            <button type='button' onClick={handleUpdate}>Update</button>

            {/* <button type='button' onClick={()=>setColor("Black")}>Update</button> */}
        </>
    )
}