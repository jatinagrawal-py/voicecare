import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate} from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import NavbarL from '../componentsLogin/NavbarL';

const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const [signupData, setsignupData] = useState({
    username : '',
    email : '',
    password : ''
  })

  const submitHandel = async(e)=>{
    e.preventDefault()

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/voicecare-signup`, signupData)

    if(response.status==201){
      const data = response.data
      
      localStorage.setItem('token',data.token)
      localStorage.setItem('username', data.user.username);
      navigate('/voicecare-form')
    }

    setsignupData({
      ...signupData,
      username:'',
      email : '',
      password:''
    })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const updateusername = (e)=>{
    setsignupData({
      ...signupData,
      username : e.target.value
    })
  }

  const updateemail = (e)=>{
    setsignupData({
      ...signupData,
      email : e.target.value
    })
  }

  const updatepassword = (e)=>{
    setsignupData({
      ...signupData,
      password : e.target.value
    })
  }

  

  return (
    <div className="h-screen bg-black">
      <NavbarL/>
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-slate-300 rounded-lg shadow-xl p-8 w-full max-w-md m-6">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Signup</h2>
          
          <form onSubmit={submitHandel} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                value={signupData.username}
                onChange={updateusername}
                type="text"
                id="username"
                name="username"
                placeholder="Type Your Username"
                className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                value={signupData.email}
                onChange={updateemail}
                type="email"
                id="email"
                name="email"
                placeholder="Type Your Email"
                className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={signupData.password}
                  onChange={updatepassword}
                  id="password"
                  name="password"
                  placeholder="Type Your Password"
                  className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-md font-medium hover:from-blue-600 hover:to-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Signup
              </button>
            </div>
          </form>
        
        </div>
      </div>
    </div>
  );
};

export default Signup;