import axios from "axios";
import React, { useState } from "react";

export const ResetPaaaword = ()=>{
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const changePassword = async () =>{
        try {
            if(newPassword === confirmNewPassword){
                const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/reset`,{
                    password,
                    newPassword
                },{
                    headers:{
                        authorization: `${localStorage.getItem("token")}`
                    }
                });
    
                if(response){
                    alert("Password Changed Successfully!");
                }else{
                    alert('Current Password is wrong!');
                }
            }else{
                alert("Password is not same!");
            }
        } catch (error) {
            alert("Something went wrong!");
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col gap-8 bg-slate-100 sm:p-10 p-4 rounded-lg">
            <div className="flex justify-center">
                <h3 className="text-3xl font-serif">Change Password</h3>
            </div>
            <div className="flex flex-col gap-5">
                <input type="password" className="sm:w-72 h-10 p-2 rounded-md border" required name="password" placeholder="Current Password" 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                />
                <input type="password" className="sm:w-72 h-10 p-2 rounded-md border" required name="newPassword" placeholder="New Password" 
                    onChange={(e)=>{
                        setNewPassword(e.target.value);
                    }}
                />
                <input type="password" className="sm:w-72 h-10 p-2 rounded-md border" required name="confirmNewPassword" placeholder="Confirm New Password" 
                    onChange={(e)=>{
                        setConfirmNewPassword(e.target.value);
                    }}
                />
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md"
                    onClick={()=>{
                        changePassword()
                    }}
                >
                    Change Password
                </button>
            </div>
        </div>
    )
}