import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import './index.css';
const ForExample = () => {
    const [Username, setUserName] = useState("")
    const[newUserName,SetNewUserName] = useState("")
    const notify = () => toast("Wow so easy!");

    const getUserName = (event) => {
        setUserName(event.target.value);    
    }
    const UserName = (e) => {    
        e.preventDefault();
        SetNewUserName(Username);
        notify();
    }
  return (
    
  
     <section className="formsection">
        <h2>Hello,{newUserName}</h2>
        <div className="inputdev">
          <form onSubmit={UserName}>
        <input type="text" placeholder="Enter your name" onChange={getUserName}/> <br>
        </br>
        <button className="btn" type="submit" > Submit  </button>
        </form>       
        </div>
       <ToastContainer />

    </section>
  )
}

export default ForExample