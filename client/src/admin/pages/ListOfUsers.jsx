import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const ListOfUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/author/get`, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            });

            setUsers(response.data);
            console.log(users);
        }
        fetchData();
    }, [])

    return (
        <div className="flex flex-col item-center justify-center lg:ml-64 lg:mt-6 lg:w-full">
            <div className="heading text-3xl font-bold text-center select-none">
                <h1>
                    List of Users
                </h1>
                <p className="text-center text-gray-500 mt-2 text-sm">
                    Owners can see all the users.
                </p>
                <div className="border-b-2 border-gray-200 m-8"></div>
            </div>
            <div className="flex flex-col p-4 gap-4">
                {users.map((user) => {
                    return (
                        <div className="flex md:flex-row flex-col p-4 justify-between">
                            <div className="flex md:flex-row flex-col gap-5 items-center">
                                <div className="flex items-center">
                                    <img src={`${import.meta.env.VITE_API_BASE_URL}/images/profile.png`} alt={user.title} className=" w-28 h-auto rounded-full" />
                                </div>
                                <div className="flex flex-col item-center">
                                    <Link to={"/author/" + user.username} className="text-lg font-semibold hover:text-gray-700">
                                        {user.name}
                                    </Link>
                                    <p className="text-gray-500 mt-2">By{" "}
                                        {user.username}
                                    </p>
                                    <p className="text-gray-500 mt-2">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse md:flex-col justify-between gap-3 mt-2 items-center">
                                <Menu as="div" className="relative">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 lg:right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                                        ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <>
                                                        <button
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}
                                                            onClick={() => {
                                                                // setOpen(true)
                                                                // confirm("Are you sure you want to delete this post?") && deletePost(post.url)
                                                            }}
                                                        >
                                                            Delete User
                                                        </button>
                                                    </>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}
                                                    >
                                                        Change Position
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <p className="text-gray-500">{user.position}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}