import Recat from 'react'

import { useState  } from 'react'



export default function UseStateWithObj(){

const [count,setCount]=useState(0)

const [car,setCar]=useState({
brand:"Ferari",
color:"Blue",
model:"Roma",
year:"2023"
})

const changeBrand=()=>{

    setCar((prev)=>{

        return{
            ...prev,color:"Red"
        }

    })

}


// const increaseCount=()=>{

// //setCount(count+1)//0+1 =1
// //setCount(count+1)// 0+1=1
// //setCount(count+1)//0 +1=1

// setCount((prev)=> prev+1)// 0+1=1
// setCount((prev)=> prev+1)// 1=1=2
// setCount((prev)=> prev+1)// 2=1=3
// setCount((prev)=> prev+1)// 3=1=4

// }



return(
<>
<h1>My {car.brand}</h1>
<h4>It is a {car.color} {car.model} from {car.year}</h4>

<button onClick={changeBrand}>Red</button>

<h1>using prev state to maontain the state</h1>
<h1>Count:{count}</h1>
<button >Increase The Count</button>


</>

)



}