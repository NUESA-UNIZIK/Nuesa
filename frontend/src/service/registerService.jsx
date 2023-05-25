import axios from "axios";

const url = "/users/"
export const signUp = async(data)=>{
    const res = await axios.post(url + "register", data)
    .then((res)=> res)
    .catch((err)=>err.response)
    return (res)
  }
export const loginIn = async(data)=>{
    const res = await axios.post(url + "login", data)
    return (res)
  }