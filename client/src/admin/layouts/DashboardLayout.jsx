import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const DashboardLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    if (!localStorage.getItem("token")) {
        navigate('/admin/auth/signin');
    }

    const isChildRouteActive = location.pathname !== '/admin/dashboard';

    return (
        <div className="flex lg:flex-row flex-col">
            <Navbar />
            {isChildRouteActive ? <Outlet /> : <WelcomeDashboard />}
        </div>
    );
}

const WelcomeDashboard = () => {
    return (
        <div className="flex flex-col item-center justify-center lg:ml-64 lg:w-full h-screen">
            <h1 className="text-3xl font-bold text-center">Welcome to the Admin Dashboard!</h1>
        </div>
    );
}