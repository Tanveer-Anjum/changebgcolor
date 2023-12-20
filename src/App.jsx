import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const[color , setColor] = useState(' ');
 
    

  return (
    <>
    <h1 className="heading">Click And See The Magic !</h1>
   <div className="nav"   style ={{backgroundColor:color}}>
    


    <button onClick={()=>setColor("blue")} className="btn" id="btn1">blue</button>
    <button onClick={()=>setColor("green")} className="btn" id="btn2">green</button>
    <button onClick={()=>setColor("red")} className="btn" id="btn3">red</button>
    <button onClick={()=>setColor('purple')} className="btn" id="btn4">purple</button>
    <button onClick={()=>setColor("yellow")}className="btn" id="btn5">yellow</button>
    </div>
  
    </>
  )
}

export default App


