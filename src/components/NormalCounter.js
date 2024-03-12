import React,{useState} from 'react';

const NormalCounter=()=>{
  const [counter,setCounter]=useState(0);
  const handleIncreament=()=>{
    setCounter(counter+1);
  }
  return (
    <>
      <h1>This Is Normal Counter </h1>
      <h2>Count is: {counter}</h2>
  <button onClick={handleIncreament}>Increament</button>
    </>
  )
}
