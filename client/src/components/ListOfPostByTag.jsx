import  Axios  from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListOfPostPage } from "../pages/ListOfPostPage";

export const ListOfPostByTag = ()=>{
    const { tag } = useParams();

    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        try {
            // const response = await Axios.get("http://localhost:3001/post/getpostbytag/" + tag);
            const response = await Axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/getpostbytag/${tag}`);
            setPosts(response.data.reverse());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <ListOfPostPage posts={posts} heading={"From the CStoAi"} description={"Explore the " + tag + " topic."}/>
    );
}