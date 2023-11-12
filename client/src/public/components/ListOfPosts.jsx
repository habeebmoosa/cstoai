import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ListOfPostPage } from "../pages/ListOfPostPage";

export const ListOfPosts = () => {

    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await Axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/read`);
            setPosts(response.data.reverse());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ListOfPostPage posts={posts} heading={"From the CStoAi"} description={"Learn about AI, machine learning, and deep learning, and how they're being used to solve the problems."}/>
    )
}