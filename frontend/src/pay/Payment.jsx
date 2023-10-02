import { set } from 'mongoose';
import React, { useState } from 'react';
import axios from "axios"
const Payment = ()=> {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cart, setCart] = useState('')

    const pay =()=>{
        axios.get('http://localhost:8000/api/payment')
    }
    
    return (
        <div className='flex flex-col gap-5 w-[80%] mx-auto bg-yellow-400'> 
        <input onChange={(e)=> setName(e)} value={name} className='flex bg-red-500 w-full h-5' type="email" name="user_email" placeholder="email"/> 
        <input onChange={(e)=> setEmail(e)} value={email} className='flex bg-red-700' type="text" name="amount" placeholder="amount"/> 
        <input onChange={(e)=> setCart(e)} value={cart} className='flex bg-red-700' type="text" name="cartid" placeholder="cartid"/> 
        <button onClick={pay} type="submit" name="pay_now" id="pay-now" title="Pay now">Pay now</button>
        </div>    
    )
}

export default Payment;