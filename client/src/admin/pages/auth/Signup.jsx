import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = ()=>{
    const navigate = useNavigate();

    if(window.location.pathname === '/admin/auth/signup' && localStorage.getItem("token")){
        navigate('/admin/dashboard');
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const signUp = async () =>{
        if(password === confirmPassword){
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/signup`,{
                name,
                username,
                email,
                password
            });

            if(response){
                navigate('/admin/auth/signin');
            }else{
                alert('Something went wrong');
            }
        }else{
            alert("Password is not same!");
        }
    }

    return (
        <div className="flex flex-col gap-8 bg-slate-100 sm:p-10 p-4 rounded-lg">
            <div className="flex justify-center">
                <h3 className="text-3xl font-serif">Sign Up</h3>
            </div>
            <div className="flex flex-col gap-5">
                <input className="sm:w-72 h-10 p-2 rounded-md border" required type="text" name="name" placeholder="Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                />
                <input className="sm:w-72 h-10 p-2 rounded-md border" required type="email" name="email" placeholder="Email" 
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                />
                <input className="sm:w-72 h-10 p-2 rounded-md border" required type="text" name="username" placeholder="Username" 
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                />
                <input type="password" className="sm:w-72 h-10 p-2 rounded-md border" required name="password" placeholder="Password" 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                />
                <input type="password" className="sm:w-72 h-10 p-2 rounded-md border" required name="confirmPassword" placeholder="Confirm Password" 
                    onChange={(e)=>{
                        setConfirmPassword(e.target.value);
                    }}
                />
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md"
                    onClick={()=>{
                        signUp()
                    }}
                >Sign Up</button>
            </div>
            <div className="flex justify-center">
                <p className="text-sm">
                    Already have an account? <Link to="/admin/auth/signin" className="text-blue-500">Sign In</Link>
                </p>
            </div>
        </div>
    )
}