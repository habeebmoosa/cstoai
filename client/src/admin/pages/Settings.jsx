import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
    const [author, setAuthor] = useState({
        name: "",
        email: "",
        username: "",
        position: "",
        description: "",
        social: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: "",
            github: "",
            youtube: ""
        }
    });
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/author/profile`, {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`,
                    },
                });

                setAuthor(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    
    },[]);

    const saveChanges = async () => {
        try {
            const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/author/update`, {
                name: author.name,
                email: author.email,
                description: author.description,
                social: author.social
            }, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col item-center justify-center lg:ml-64 lg:mt-6 lg:w-full mb-7">
            <div className="heading text-3xl font-bold text-center select-none mb-5">
                <h1>Settings</h1>
            </div>
            <div className="settings flex flex-col md:pl-32 md:pr-32 gap-6">
                <div className="profileSettings flex flex-col p-4 gap-10">
                    <h1 className="text-2xl font-bold mb-5">Profile</h1>

                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="name" className="w-1/3 md:p-0 pl-2">Name</label>
                        <input type="text" className="border-gray-300 p-2 rounded-md outline-none"
                            value={author.name} onChange={(e)=> setAuthor({...author, name: e.target.value})}
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="email" className="w-1/3 md:p-0 pl-2">Email</label>
                        <input type="email" className="border-gray-300 p-2 rounded-md outline-none" 
                            value={author.email} onChange={(e)=> setAuthor({...author, email: e.target.value})}
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="username" className="w-1/3 md:p-0 pl-2">Username</label>
                        <input type="text" className="border-gray-300 p-2 rounded-md outline-none text-gray-500" 
                            value={author.username} readOnly
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="postion" className="w-1/3 md:p-0 pl-2">Position</label>
                        <input type="text" className="border-gray-300 p-2 rounded-md outline-none text-gray-500" 
                            value={author.position} readOnly
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="description" className="w-1/3 md:p-0 pl-2">Description</label>
                        <textarea type="text" className="p-2 outline-none md:w-96"
                            value={author.description} onChange={(e)=> setAuthor({...author, description: e.target.value})}
                        ></textarea>
                    </div>
                </div>
                <div className="passwordSettings flex flex-col p-4 gap-10">

                    <h1 className="text-2xl font-bold mb-5">Password</h1>

                    
                    <button className="bg-gray-700 text-white p-2 rounded-md w-60 self-center"
                        onClick={()=> navigate('/admin/auth/resetpassword')}
                    >Change Password</button>
                </div>
                <div className="socialSettings flex flex-col p-4 gap-10">

                    <h1 className="text-2xl font-bold mb-5">Social</h1>

                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="facebook" className="w-1/3 md:p-0 pl-2">Facebook</label>
                        <input type="text" className="border-gray-300 p-2 rounded-md outline-none" 
                            value={author.social.facebook} onChange={(e)=> setAuthor({...author, social: {...author.social, facebook: e.target.value}})}
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="twitter" className="w-1/3 md:p-0 pl-2">Twitter</label>
                        <input type="text" className="border-gray-300 p-2 rounded-md outline-none" 
                            value={author.social.twitter} onChange={(e)=> setAuthor({...author, social: {...author.social, twitter: e.target.value}})}
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="instagram" className="w-1/3 md:p-0 pl-2">Instagram</label>
                        <input type="text" className="border-gray-300 p-2 rounded-md outline-none" 
                            value={author.social.instagram} onChange={(e)=> setAuthor({...author, social: {...author.social, instagram: e.target.value}})}
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="linkedin" className="w-1/3 md:p-0 pl-2">LinkedIn</label>
                        <input type="text" className="border-gray-300 p-2 rounded-md outline-none" 
                            value={author.social.linkedin} onChange={(e)=> setAuthor({...author, social: {...author.social, linkedin: e.target.value}})}
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="github" className="w-1/3 md:p-0 pl-2">Github</label>
                        <input type="text" className="border-gray-300 p-2 rounded-md outline-none" 
                            value={author.social.github} onChange={(e)=> setAuthor({...author, social: {...author.social, github: e.target.value}})}
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:items-center md:flex-row border-b-2">
                        <label htmlFor="youtube" className="w-1/3 md:p-0 pl-2">Youtube</label>
                        <input type="text" className="border-gray-300 p-2 rounded-md outline-none" 
                            value={author.social.youtube} onChange={(e)=> setAuthor({...author, social: {...author.social, youtube: e.target.value}})}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-gray-700 text-white p-2 rounded-md w-60 self-center"
                        onClick={()=> {
                            saveChanges();
                        }}
                    >Save Changes</button>
                </div>
                <div className="flex flex-col p-4 gap-10">
                    <h1 className="text-2xl font-bold mb-5">Danger Zone</h1>
                    <p className="text-red-700">Once you delete your account, there is no going back. Please be certain.</p>
                    <button className="bg-red-700 text-white p-2 rounded-md w-60 self-center"
                        onClick={()=> console.log(author)}
                    >Delete Account</button>
                </div>
            </div>
        </div>
    );
}