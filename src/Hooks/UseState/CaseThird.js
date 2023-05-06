// Case3. We could create multiple state Hooks to track individual values.
//        Create multiple state Hooks:

import React, { useState } from 'react'



const CaseThird = () => {
    //2.1 Hooks area
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    //2.2 Definition area
    //2.3 Return Statement
  return (
    <>
        <h1>My {brand}</h1>
        <p>It's color is {color} and launched in the year of {year}</p>
    </>
  )
}

export default CaseThird;



//===============================================================================================================

// Case4.  Create a single Hook that holds an object:



const CaseForth = () => {
    // 2.1 Hooks area
    const [car,setCar]=useState({
        brand:"Fords",
        modal:"Mustang",
        year:"1964",
        color:"Red",
    })
    
    //2.2 Function definition area
    //2.3 Return statement
  return (
    <>
        <h1>My car's brand name is {car.brand}</h1>
        <p>It's color is {car.color},modal is {car.modal} and it was launched in {car.year}</p>
    </>
  )
}

export default CaseForth


//===============================================================================================================

// Case5.-  Updating Objects and Arrays in State.
//              * Use the JavaScript spread operator to update only the color of the car


const CaseFifth = () => {
    // 2.1 Hooks area
    const [car,setCar]=useState({
        brand:"Fords",
        modal:"Mustang",
        year:"1964",
        color:"Red",
    })
    // 2.2 function definition area
    const onChangeColor=()=>{
        setCar((prevState)=>{
            return({
                ...prevState,
                color:"Black"
        })
        })
    }
  return (
    <>
        <h1>My car's brand name is {car.brand}</h1>
        <p>It's color is {car.color},modal is {car.modal} and it was launched in {car.year}</p>
        <button type="button" onClick={onChangeColor}>Update</button>
    </>
  )
}

export default CaseFifth;


//========================================================================================================
