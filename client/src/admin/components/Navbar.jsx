import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="hidden lg:flex flex-col justify-between bg-gray-700 p-5 space-y-5 text-white h-screen w-1/6 fixed">
                <div className="flex flex-col space-y-10">
                    <h1 className="text-2xl font-bold first-letter:text-4xl text-center select-none">Dashboard</h1>
                    <div className="flex flex-col space-y-3">
                        <Link className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out py-2 px-4 rounded-md text-center" to="/admin/dashboard/posts/create">
                            <button className="text-white">Create Post</button>
                        </Link>
                        <nav className="bg-gray-800 p-2 rounded-md">
                            <ul className="flex flex-col space-y-5">
                                <Link to="/admin/dashboard/posts">
                                    <li className="p-2 hover:bg-gray-400 rounded-md hover:text-gray-900 cursor-pointer">
                                        Posts
                                    </li>
                                </Link>
                                <Link to="/admin/dashboard/contacts">
                                    <li className="p-2 hover:bg-gray-400 rounded-md hover:text-gray-900 cursor-pointer">
                                        Contacts
                                    </li>
                                </Link>
                                <Link to="/admin/dashboard/users">
                                    <li className="p-2 hover:bg-gray-400 rounded-md hover:text-gray-900 cursor-pointer">
                                        Users
                                    </li>
                                </Link>
                                <Link to="/admin/dashboard/settings">
                                    <li className="p-2 hover:bg-gray-400 rounded-md hover:text-gray-900 cursor-pointer">
                                        Settings
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
                <button className="bg-red-800 hover:bg-red-600 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md"
                    onClick={()=>{
                        localStorage.removeItem("token");
                        navigate('/admin/auth/signin');
                    }}
                >Sign Out</button>
            </div>

            {/* Mobile navbar */}
            <div className="lg:hidden bg-gray-700 w-full h-12 flex items-center">
                <button className="text-white p-2 ml-1 bg-slate-800 rounded-md" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className="text-white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed bg-gray-700 w-full p-2 mt-12 space-y-3">
                    <Link className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out py-2 px-4 rounded-md text-center" to="/admin/dashboard/posts/create">
                            <button className="text-white mt-2"
                                onClick={()=>{
                                    setIsMobileMenuOpen(false);
                                }}
                            >Create Post</button>
                    </Link>
                    <ul className="flex flex-col space-y-2 text-white" onClick={()=> setIsMobileMenuOpen(false)}>
                        <Link to="/admin/dashboard/posts">
                            <li className="p-2 hover:bg-gray-400 rounded-md hover:text-gray-900 cursor-pointer">
                                Posts
                            </li>
                        </Link>
                        <Link to="/admin/dashboard/contacts">
                            <li className="p-2 hover:bg-gray-400 rounded-md hover:text-gray-900 cursor-pointer">
                                Contacts
                            </li>
                        </Link>
                        <Link to="/admin/dashboard/users">
                            <li className="p-2 hover:bg-gray-400 rounded-md hover:text-gray-900 cursor-pointer">
                                Users
                            </li>
                        </Link>
                        <Link to="/admin/dashboard/settings">
                            <li className="p-2 hover:bg-gray-400 rounded-md hover:text-gray-900 cursor-pointer">
                                Settings
                            </li>
                        </Link>
                    </ul>
                    <button className="bg-red-800 hover:bg-red-600 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md"
                    onClick={()=>{
                        localStorage.removeItem("token");
                        navigate('/admin/auth/signin');
                    }}
                >Sign Out</button>
                </div>
            )}
        </>
    );
};
