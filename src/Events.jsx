import React from 'react'
import { useState } from 'react'

const Events = () => {

const [count, setCount] = useState(0);  


//  const increment = () => {
//     setCount(count + 1);
//   }
//     const decrement = () => {
//         if(count>1){
//             setCount(count - 1);
//         }
        
//     }   

   
  return (
    <div>
        <div ><h1>welcome to page</h1></div><br></br>
        <div><h1>{count}</h1></div>
        <button onClick={() => setCount(count+1)}>increment</button><br></br>
        <button onClick={() =>{if (count>1)setCount(count-1)}}>decrement</button><br></br>
        <button onClick={() => setCount(0)}>reset</button><br></br>
    </div>
  )
}

export default Events