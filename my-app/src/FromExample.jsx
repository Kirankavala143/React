import React, { useState } from 'react'

const FromExample = () => {

    const[userName,setUserName]=useState("")

    const[newUserDetails, setNewUserDetails] = useState()

    const getUserName =(event)=>{
       setUserName(event.target.value)
    }

    const userDetails=(e)=>{
        e.preventDefault()
        setNewUserDetails(userName)

    }

  return (
    <section className='formSection'>
        {/* <h2>Hello,{userName}</h2> */}
        <h2>Hello,{newUserDetails}</h2>
        <div className='inputDiv'>

            <form onSubmit={userDetails}>
            <input type='text' placeholder='Enter Your Name' onChange={getUserName}/>
            <br></br>
            <button className='submitbtn' type='submit'>Submit</button>

            </form>
            
        </div>
    </section>
  )
}

export default FromExample