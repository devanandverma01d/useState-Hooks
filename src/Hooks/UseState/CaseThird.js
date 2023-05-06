// Case3. We could create multiple state Hooks to track individual values.
//        Create multiple state Hooks:

import React, { useState } from 'react'


{/*
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

*/}

//===============================================================================================================

// Case4.  Create a single Hook that holds an object:

{/*

const CaseForth = () => {
    // 2.1 Hooks area
    const obj = {
        brand:"Fords",
        modal:"Mustang",
        year:"1964",
        color:"Red",
    }
    const [car,setCar]=useState(obj)
    
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
*/}

//===============================================================================================================

// Case5.-  Updating Objects in State.
//              * Use the JavaScript spread operator to update only the color of the car

{/*
const CaseFifth = () => {
    // 2.1 Hooks area
    const obj={
        brand:"Fords",
        modal:"Mustang",
        year:"1964",
        color:"Red",
        isBranded:true
    }
    const [car,setCar]=useState(obj)
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
        <p>is this branded: {car.isBranded.toString()}</p>
        <button type="button" onClick={onChangeColor}>Update</button>
    </>
  )
}

export default CaseFifth;

*/}
//========================================================================================================

// Case6. Updating an array using useState.

const CaseThird = () => {
  //2.1 Hooks area
  const myArr = [10,12,14,16,18,20]
  const[array, setArray]= useState(myArr)
  //2.2 function definition area
  //Note- here we are updating whole array.

  // const onChangeList=()=>{
  //   setArray([11,13,15,17,19])
  // }

  const onChangeList=()=>{
    setArray(prevState=>{
      return[
        ...prevState,
        //22
        //Math.random()*50
        Math.floor(Math.random()*50)
      ]
    })
  }
  
  //2.3 return statement
  return (
    <>
      <button type="button" onClick={onChangeList}>Update</button>
      <ul>
        {
          array.map((num,idx)=>{
            return <li key={idx}>{num}</li>
          })
        }
      </ul>
      
    </>
  )
}

export default CaseThird

//======================================================================================================