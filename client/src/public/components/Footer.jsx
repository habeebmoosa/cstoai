import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer class="bg-white shadow dark:bg-gray-800 ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" class="flex items-center mb-4 sm:mb-0">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white lg:ml-4">CStoAi</span>
                    </Link>
                    <div className="social-media-links flex flex-row gap-5 mb-4 sm:mb-0">
                        <Link to="https://github.com/habeebmoosa/blog" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-github fa-xl"></i>
                        </Link>
                        <Link to="https://www.linkedin.com/in/habeebmoosa/" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-linkedin fa-xl"></i>
                        </Link>
                        <Link to="https://twitter.com/habeebmoosadev" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-square-x-twitter fa-xl"></i>
                        </Link>
                    </div>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/about" class="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" class="hover:underline">Contact</Link>
                        </li>
                        <li>
                            <Link to="/admin" class="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" class="hover:underline">CStoAi</Link>. All Rights Reserved.</span>
            </div>
        </footer>


    );
}