import React from 'react'
import {useState} from 'react'



export default function UseStateDemo(){

const [color,setColor]=useState("Red")

//let color="Red"

const changeColor=()=>{

   // color="Blue"

   if(color=="Red")
   {
   setColor("Blue")
   }
   else 
   {
    setColor("Red")
   }
}

return(
<>
<h1>My favourite color is {color}!</h1>

<button style={{color:color=="Red"?"blue":"red"}} onClick={changeColor}>{color=="Red"?"Blue":"Red"}</button>
</>


)


}
