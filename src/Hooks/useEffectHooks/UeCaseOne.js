import React, { useEffect, useState } from 'react'
{/*
 
    Case1. when useEffect render without Condition.
       * UseEffect will runs after first render and also runs on every render update like-
         when component mount, when component update, when component unmount.

       * since it runs on every render-that will not good for React's performence.
         so that we can make it conditionally render. 

*/}


{/*
const UeCaseOne = () => {
  //2.1 Hooks area
  const[data,setData]=useState(0);
  useEffect(()=>{
    console.log("I am calling from useEffect---->",data)
  })
  //2.1 Function definition area
  return (
    <>
      <h1>{data}</h1>
      <button type="submit" onClick={()=>setData(data+1)}>Update</button>
    </>
  )
}

export default UeCaseOne;
*/}
//=================================================================================================================

{/*
 
    Case2. when useEffect render with Conditions.
          condition 1. It render only when component is mounted i.e. runs after first render.
          condition 2. When only props get updated.
          condition 3. When only states get updated.
          
       *** Note- Second argument(i.e. dependency array) is used for applying conditions/effects.
           that is we can control the first argument(Function) by second argument(dependency array)

       *** Note2- By adding dependency array the uesEffect will only run after first render,otherwise it wll run
           after first render and also for every render.

*/}

{/*
const UeCaseOne = () => {
  //2.1 Hooks area
  const[data,setData]=useState(0);
  const[name,setName]=useState("Devanand")
  useEffect(()=>{
    console.log("I am calling from useEffect---->",data)
  },[data])
  //2.1 Function definition area
  return (
    <>
      <h1>{name}</h1>
      <h1>{data}</h1>
      <button type="submit" onClick={()=>setData(data+1)}>UpdateData</button>
      <button type="submit" onClick={()=>setName("Verma")}>UpdateName</button>
    </>
  )
}

export default UeCaseOne;

*/}

//==============================================================================================================

{/* 
      Case3. 
            Let's use a timer as an example.
*/}

{/*
const UeCaseOne = () => {
  //2.1 Hooks area
  const[count,setCount]=useState(0);
  useEffect(()=>{
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
    return () => clearTimeout(timer)
    }, []);
  return (
    <>
      <h1>I have rendered {count} times!</h1>
    </>
  )
}

export default UeCaseOne
*/}

//============================================================================================================