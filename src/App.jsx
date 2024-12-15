import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

       <div className="main">
       <h1>Finance Dashboard</h1>
       <div className="input-flex">
         <input  type="text"   placeholder='Stock Symbol'></input>
         <input  type="text" placeholder='Quantity'></input>
         <input  type="text" placeholder='Purchase Price'></input>
         <button type="button">Add Stock</button>
       </div>
       <h1>Stock List</h1>
       <h2>No stocks added yet.</h2>
       </div>
      )
    
    }
  

export default App
