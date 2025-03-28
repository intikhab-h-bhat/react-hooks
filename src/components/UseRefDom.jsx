import React, { useRef } from 'react'



export default function UseRefDom(){
const inputElem= useRef()



const handleClick=()=>{

console.log(inputElem.current.style.background="red")

}

    return(
        <>
        <input type="text" ref={inputElem}/>

        <button onClick={handleClick}>Click Me</button>
        </>
    )



}