import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Contact(){

const {phone,name}=useContext(AppContext)

   return(
        <>
        <h1>Contact</h1>
        <h3>Phone:{phone}</h3>
        </>
    )
}