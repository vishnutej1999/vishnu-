import React from 'react'

const FourthComp = (props) => {
    const {name, age, email, phone} = props.User;
    console.log(name, age, email, phone);
  return (
    <div>
    <div><h1>{name}</h1></div>
    <div>{phone}</div>
    <div>{email}</div>
    <div>{age}</div>

    </div>
  )
}

export default FourthComp