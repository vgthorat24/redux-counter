import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear, decreament, increament } from '../actions/Actions'
import { UseDispatch } from 'react-redux'

export default function Conuter() {
const count=useSelector((state)=>state.counter)
const dispatch=useDispatch();
const HandleIncreament=()=>{
    let actionObj=increament();
    dispatch(actionObj);
}
const HandleDecreament=()=>{
    let actionObj=decreament();
    dispatch(actionObj);
}
const HandleClear=()=>{
    let actionObj=clear();
    dispatch(actionObj);
}
  return (
    <>
        <h1>Count Is: {count}</h1>
        <button onClick={HandleIncreament}>INCREAMENT</button>
        <button onClick={HandleClear}>CLEAR</button>
        <button onClick={HandleDecreament}>DECREAMENT</button>
    </>
  )
}
