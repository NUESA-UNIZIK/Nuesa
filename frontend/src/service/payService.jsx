import axios from 'axios'
import {toast} from 'react-toastify'

const {user} = JSON.parse(localStorage.getItem("user"))
const email = user.username
export const  Pay = async() =>{
    const res = await axios.post("http://localhost:8000/api/payment", {email} )
    console.log(res)
    return res
    // if(res.data){
    //    return window.location.replace(res.data.data.data.authorization_url)
    // }else if(res.response){
    //    return toast(err.response.data)
    // }
    // .then((res)=> {window.location.replace(res.data.data.data.authorization_url)})
    // .catch((err)=> {toast(err.response.data)})
  }