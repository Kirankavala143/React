import React from 'react'

import {useState,useEffect} from 'react'
const StateMgn = () => {

    const  [city,setCity] = useState("Hyderabad")

    useEffect(()=>{
    if(city === "Goa"){
        setCity("Bangalore")
    }else{
        setCity("Delhi")
    }     
   },[])

























   













  return (
    <div>
        <h1>I live in {city}</h1>
    </div>
  )
}

export default StateMgn