import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const ContactFeedback = () => {
    const navigate = useNavigate();

    if(!localStorage.getItem("token")){
        navigate('/admin/auth/signin');
    }

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get(`${import.meta.env.VITE_API_BASE_URL}/pages/contact/read`);
                setContacts(response.data.reverse());
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col item-center justify-center lg:ml-52 xl:ml-80 lg:mt-6 lg:w-full">
            <div className="heading text-3xl font-bold text-center select-none">
                <h1>Feedbacks and Contacts</h1>
            </div>
            <div className='flex flex-col m-4 mt-10 p-4 gap-3'>
                {
                    contacts.map((contact) => {
                        return (
                            <div className=' border-2 rounded-md p-4 space-y-5'>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <p>{contact.name}</p>
                                    <p>{contact.email}</p>
                                    <p className="text-gray-500 mt-2">
                                        {new Date(contact.createdDate).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                                <div className='message'>
                                    <p className=''>{contact.message}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
