import { useState,useRef, useEffect } from 'react'
import './App.css'

function StopWatch() {
  const[seconds,setSeconds]=useState(0);
  const[isRunning,setIsRunning]=useState(false);
  const inputRef = useRef(null)

  useEffect(()=>{
    if(isRunning){
      inputRef.current=setInterval(()=>{
        setSeconds((prev)=>prev + 1)
      },1000)
    }else{
      clearInterval(inputRef.current)
    }

    return()=>{
       clearInterval(inputRef.current)
    }
  },[isRunning])

  const formatTime = () => {
   const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }
 
  const handleStartStop = () => {
    setIsRunning((prev)=>!prev)
  }

  const handleReset = () => {
    clearInterval(inputRef.current)
    setSeconds(0);
    setIsRunning(false)
  }

  return (
    <>
   <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Stopwatch</h1>
      {/* 👇 important: Cypress expects exactly this format */}
      <h2>Time: {formatTime()}</h2>  
      
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
    </>
  )
}

export default StopWatch
