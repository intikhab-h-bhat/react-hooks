import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Footer(){

const {phone,name} =useContext(AppContext)


   return(
        <>
        <h1>Footer</h1>
        <h3>Phone Number:{phone}</h3>
        <h3>message:{name}</h3>
        </>
    )
}