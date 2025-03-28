import React,{useState,useMemo} from 'react'


export default function UseMemoDemo(){
const [number,setNumber]=useState(0)
const [count,setCount]=useState(0)


function cubeOfNumber(num){

console.log("Calluculation done")
return Math.pow(num,3)

}

const result= useMemo(()=>{
    return (
        cubeOfNumber(number)
    )
},[number])
//cubeOfNumber(number)


return(
<>

<input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
<h1>Cube of number is : {result}</h1>

<button onClick={()=>setCount(count+1)}>Click Me</button>
<h3>{count}</h3>

</>

)


}