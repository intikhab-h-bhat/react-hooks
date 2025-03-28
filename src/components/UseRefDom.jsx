import React, { useEffect, useRef, useState } from 'react'



export default function UseRefDom(){
// const inputElem= useRef()

const [value,setValue]=useState(0)
//const [count,setCount]=useState(0)
const count=useRef(0) // use useRef if you dont want to rerender the commponent


// const handleClick=()=>{

// console.log(inputElem.current.style.background="red")

//}


useEffect(()=>{

//setCount((prev)=>prev+1)
console.log(count.current)
count.current=count.current +1


})

    return(
        <>
        {/* <input type="text" ref={inputElem}/>

        <button onClick={handleClick}>Click Me</button> */}

        <button onClick={()=>setValue((prev)=>prev+1)}>+1</button>
        <h2>Value:<strong>{value}</strong></h2>
        <button onClick={()=>setValue((prev)=>prev-1)}>-1</button>
            {/* <h3>Number of time the component is renderring: {count}</h3> */}
            <h3>Number of time the component is renderring: {count.current}</h3>
        </>
    )



}