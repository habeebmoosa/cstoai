import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NotFound } from './404';

export const PostPage = () => {
    const { url } = useParams();
    const [post, setPost] = useState({});
    const [author, setAuthor] = useState({});

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await Axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/getpost/${url}`);
                setPost(response.data.post);

                if (!response.data.author) {
                    setAuthor({ name: "Unknown", username: "Unknown" })
                } else {
                    setAuthor(response.data.author);
                }
                console.log(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        getPost();
    }, []);



    return Object.keys(post).length > 0 ? (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
            <p className="text-gray-500 mt-2">{post.description}</p>

            <div>
                {post.imgname ? (
                    <img src={`${import.meta.env.VITE_API_BASE_URL}/images/${post.imgname}`} alt={post.title} className="my-8 rounded-md" />
                ) : (
                    <img src={`${import.meta.env.VITE_NOTFOUND_IMAGE}`} alt={post.title} className="my-8 rounded-md" />
                )}
            </div>

            <div className="border-b-2 border-gray-200 mb-8"></div>
            <div className="flex flex-row justify-between mb-8">

                <p className="text-gray-500 mt-2">By{" "}
                    {author.username === "Unknown" ? (
                        <span className="text-gray-500 mt-2">Unknown</span>
                    ) : (
                        <Link to={"/author/" + author.username} className='hover:text-gray-700'>
                            {author.name}
                        </Link>
                    )}
                </p>

                <p className="text-gray-500 mt-2">
                    {new Date(post.createdDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
            </div>

            <div className="border-b-2 border-gray-200 mb-8"></div>

            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="flex flex-col mt-8 space-y-5">
                <h2 className="text-2xl font-bold text-gray-900">Tags</h2>
                <div className="mt-5">
                    {
                        post.tags?.map((tag) => (
                            <Link to={"/tags/" + tag}>
                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10
                        hover:bg-blue-100 hover:text-blue-800 mr-2 cursor-pointer
                        ">
                                    {tag}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div >
    ) : (
        <NotFound />
    );

};
