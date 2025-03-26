import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    axios.get(`${import.meta.env.VITE_BASE_URL}/voicecare-logout`, {headers:{
        Authorization : `bearer ${token}`
}}).then((response)=>{
    if(response.status===200){
        localStorage.removeItem('token')
        navigate('/')
    }
})
  return (
    <div>UserLogout</div>
  )
}

export default Logout