import React, { useContext, useState } from 'react'
import { NameContext, SurnameContext } from '../../App'

const UseContextC = () => {
    const my_name=useContext(NameContext)
    const s_name=useContext(SurnameContext)
    const[address,setAddress]=useState('Utter Prradesh')
  return (
    <>
        <h1>I am belongs to component C</h1>
        <h1>My name is {my_name} and my surname is {s_name}</h1>
        <h1> I belog from {address}</h1>
    </>
  )
}

export default UseContextC