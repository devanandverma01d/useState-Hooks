import React, { createContext } from 'react'
import './App.css';
import UseReducer from './Hooks/useReducer/UseReducer';
//import UseContextA from './Hooks/useContext/UseContextA';
//import UeCaseOne from './Hooks/useEffectHooks/UeCaseOne';
//import UeCaseTwo from './Hooks/useEffectHooks/UeCaseOne';
//import CaseFifth from './Hooks/UseState/CaseThird';
//import CaseForth from './Hooks/UseState/CaseThird';
//import CaseThird from './Hooks/UseState/CaseThird';
//import { CaseTwo } from './Hooks/UseState/CaseTwo';
//import {CaseOne} from './Hooks/UseState/CaseOne';


export const NameContext=createContext();
export const SurnameContext=createContext();
function App() {
  return (
    <>
      <UseReducer />
    </>
  );
}

export default App;
