import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const DashboardLayout = () => {
    const navigate = useNavigate();

    if(!localStorage.getItem("token")){
        navigate('/admin/auth/signin');
    }

    return (
        <div className="flex lg:flex-row flex-col">
            <Navbar />
            <Outlet />
        </div>
    )
}