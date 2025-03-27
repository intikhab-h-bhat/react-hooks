import React from 'react'
import {useState} from 'react'



export default function UseStateDemo(){

const [color,setColor]=useState("Red")

//let color="Red"

const changeColor=()=>{

   // color="Blue"

   setColor("Blue")
    
}

console.log(color)


return(
<>
<h1>My favourite color is {color}!</h1>

<button onClick={changeColor}>{color=="Red"?"Blue":"Red"}</button>
</>


)


}
