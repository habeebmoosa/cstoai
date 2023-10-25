import React, { useEffect, useState } from "react";
import { ListOfPostPage } from "../pages/ListOfPostPage";
import { useParams } from "react-router-dom";
import  Axios  from "axios";

export const AuthorInfoAndPosts = ()=>{
    const { username } = useParams();

    const [author, setAuthor] = useState({});
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await Axios.get(`${import.meta.env.VITE_API_BASE_URL}/author/${username}`);
            setAuthor(response.data.author);
            setPosts(response.data.posts.reverse());
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <ListOfPostPage posts={posts} heading={author.name} description={author.description}/>
    )
}