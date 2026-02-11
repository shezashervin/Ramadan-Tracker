import React from 'react'

function FruitList() {
    const fruits= ["Apple", " ", "Banana", "Mango", "" , "Orange"]
  return (
    <div>FruitList{
        fruits.map((item,ind)=>(
            item !== '' ? <p key={ind}>{item}</p> : null
        ))}

    </div>
  )
}

export default FruitList