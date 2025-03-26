import  {React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const UserProtectedWrapper = ({children}) => { 
    const token = localStorage.getItem('token')
    const naviagte = useNavigate()
    
    useEffect(() => {
        if(!token){
            naviagte('/voicecare-login')
        }
    }, [token])
    
    
  return (
    <>{children}</>
  )
}

export default UserProtectedWrapper