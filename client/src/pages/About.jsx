import React from "react";

export const About = () => {
    return (
        <div className="about flex flex-col lg:flex-row lg:space-x-5 space-y-5 m-8 justify-center mt-24 mb-24">
            <div className="left w-full lg:w-1/2 lg:max-w-md flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">About</h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quaerat, quod.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quaerat, quod.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quaerat, quod.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quaerat, quod.
                </p>
            </div>
            <div className="right w-full lg:w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    className="w-full h-auto rounded-lg"
                    alt="About Image"
                />
            </div>
        </div>
    );
};
