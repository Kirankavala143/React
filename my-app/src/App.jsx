import React from 'react'
import {useState} from 'react'
import './App.css'
import StateMgn from './StateMgn'
import ClickEvent from './ClickEvent'
import FromExample from './FromExample'


function App() {
  const [sampleCondition,setSampleCondition] = useState(true)

  
  return (
    <div className='container'>
      <h1>Welcome </h1>

      <ClickEvent/>
      <FromExample/>
      
    </div>
  )
}

export default App