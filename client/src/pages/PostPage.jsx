import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NotFound } from './404';

export const PostPage = () => {
    const { url } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await Axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/getpost/${url}`);        
                setPost(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getPost();
    }, [url]);

    const imgUrlExample = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80";

    return post ? (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
            <p className="text-gray-500 mt-2">{post.description}</p>
            <img src={imgUrlExample} alt={post.title} className="my-8 rounded-md" />

            <div className="border-b-2 border-gray-200 mb-8"></div>

            <div className="flex flex-row justify-between mb-8">
                <p className="text-gray-500 mt-2">By {post.username}</p>
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
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 hover:bg-blue-200">
                                    {tag}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    ) : (
        <NotFound />
    );

};
