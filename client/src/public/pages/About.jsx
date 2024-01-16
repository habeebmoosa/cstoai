import React from "react";
import favicon from "../../../public/favicon.png";

export const About = () => {
    return (
        <div className="about flex flex-col lg:flex-row lg:space-x-5 space-y-5 m-8 justify-center mt-24 mb-24">
            <div className="left w-full lg:w-1/2 lg:max-w-md flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">About</h1>
                <p className="text-gray-600">
                    This is my blog page where you can find stuffs related to web development. I am a full stack web developer and I love to share my knowledge with others. I am a student and I am currently pursuing my B.Tech degree in Computer Science and Engineering. In this blog app you can get one of the most important and usefull blog posts related to computer science and web development. I hope you will like it.
                </p>
            </div>
            <div className="right w-full lg:w-1/2">
                <img
                    src={favicon}
                    className="w-full h-auto rounded-lg"
                    alt="About Image"
                />
            </div>
        </div>
    );
};
