import  Axios  from "axios";
import React, { useState } from "react";

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMesssage] = useState("");

    const sendContactInfo = async () => {
        const contactInfo = {
            name,
            email,
            message,
        };
        try {
            const response = await Axios.post(`${import.meta.env.VITE_API_BASE_URL}/pages/contact/create`, contactInfo);
            const data = await response.data;
            alert(data.message);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mx-auto p-4 flex justify-center m-14">
            <div className="max-w-md w-full">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full border rounded py-2 px-3" required
                        onChange={(e)=>{
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full border rounded py-2 px-3" required
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-600">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full border rounded py-2 px-3" required
                        onChange={(e)=>{
                            setMesssage(e.target.value);
                        }}
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={()=>{
                        sendContactInfo();
                    }}
                >Submit</button>
            </div>
        </div>
    );
};
