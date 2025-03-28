import React,{useCallback,useEffect, useState} from 'react'
import Header from './Header';


export default function UseCallBackDemo(){
    const [count,setCount]=useState(0);

const newFn=useCallback(()=>{},[])

return(
    <>
    <Header newFn={newFn}/>
    <h1>{count}</h1>
    <button onClick={()=>setCount((prev)=>prev+1)}>Click Me</button>
    </>

)



}