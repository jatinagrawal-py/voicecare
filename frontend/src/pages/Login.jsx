import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate} from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import NavbarL from '../componentsLogin/NavbarL';

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setloginData] = useState({
    username : '',
    password : ''
  })

  const submitHandel = async(e)=>{
    e.preventDefault()

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/voicecare-login`, loginData)

    if(response.status==200){
      const data = response.data
      localStorage.setItem('token',data.token)
      localStorage.setItem('username', data.user.username);
      navigate('/voicecare-ai')
    }

    setloginData({
      ...loginData,
      username:'',
      password:''
    })
  }

  const setusername = (e)=>{
    setloginData({
      ...loginData,
      username: e.target.value
    });
  }

  const setpassword = (e)=>{
    setloginData({
      ...loginData,
      password: e.target.value
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen bg-black">
      <NavbarL/>
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-slate-300 rounded-lg shadow-xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
          
          <form className="space-y-6" onSubmit={(e)=>{
                    submitHandel(e)
                  }}>
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginData.username}
                onChange={(e)=>{
                  setusername(e)
                }}
                placeholder="Type Your Username"
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
                  id="password"
                  name="password"
                  value={loginData.password}
                onChange={(e)=>{
                  setpassword(e)
                }}
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
                Login
              </button>
            </div>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/voicecare-signup" className="text-purple-600 hover:text-purple-800 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;