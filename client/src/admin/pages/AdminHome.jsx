import React from "react";
import { Link } from "react-router-dom";

export const AdminHome = ()=>{
    return(
        <div className="flex justify-center items-center h-screen flex-col">
            <h1 className="text-3xl font-serif">
                Admin
            </h1>
            <p className="text-sm font-serif">
                Only Admin can access this page
            </p>
            <div className="border border-gray-500 w-1/4 my-5"></div>
            {
                localStorage.getItem("token") ? (
                    <button className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md">
                        <Link to="/admin/dashboard">Go to Dashboard</Link>
                    </button>
                ) : (
                    <button className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md">
                        <Link to="/admin/auth/signin">Sign In</Link>
                    </button>
                )
            }
        </div>

    )
};