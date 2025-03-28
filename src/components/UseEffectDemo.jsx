import React,{useState,useEffect} from 'react'



export default function useEffectDemo(){

 const [count,setCount]=useState(0)

//// With out dependency array
//  useEffect(()=>{

//     setTimeout(()=>{
//         setCount(count+1)
//     },2000)

//  })


// // with dependency empty array
// useEffect(()=>{

//     setTimeout(()=>{
//         setCount(count+1)
//     },2000)

//  },[])


useEffect(()=>{

    setTimeout(()=>{
        setCount(count+1)
    },2000)

 },[count])



return(

   <h1>I am rendring {count} times</h1>

)

}