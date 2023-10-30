import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signin = ()=>{
    const navigate = useNavigate();

    if(window.location.pathname === '/admin/auth/signin' && localStorage.getItem("token")){
        navigate('/admin/dashboard');
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () =>{
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/signin`,{
                username,
                password
            });
    
            localStorage.setItem("token", response.data.token);
            navigate('/admin/dashboard');
        } catch (error) {
            alert("Something went wrong!")
        }
    }

    return (
        <div className="flex flex-col gap-8 bg-slate-100 sm:p-10 p-4 rounded-lg">
            <div className="flex justify-center">
                <h3 className="text-3xl font-serif">Sign In</h3>
            </div>
            <div className="flex flex-col gap-5">
                <input className="sm:w-72 h-10 p-2 rounded-md border" required type="text" name="username" placeholder="Username or Email" 
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                />
                <input type="password" className="sm:w-72 h-10 p-2 rounded-md border" required name="password" placeholder="Password" 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md"
                    onClick={()=>{
                        signIn()
                    }}
                >Sign In</button>
            </div>
            <div className="flex justify-center">
                <p className="text-sm">Don't have an account? <Link to="/admin/auth/signup" className="text-blue-500">Sign Up</Link></p>
            </div>
        </div>
    )
}