import React, { useEffect, useState } from "react";
import { ListOfPostPage } from "../pages/ListOfPostPage";
import Axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const ListOfPostBySearch = () => {
    const location = useLocation();
    const query = new URLSearchParams(window.location.search);
    const initialSearch = query.get('search');
    const [search, setSearch] = useState(initialSearch);

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        if(location.state && location.state.search){
            setSearch(location.state.search);
            fetchData();
            console.log(location.state.search);
        }
    }, [location]);
    

    const fetchData = async () => {
        try {
            const response = await Axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/read?search=${search}`);
            setPosts(response.data.reverse());
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ListOfPostPage posts={posts} heading={"Search results for: " + search} description={"Explore the " + search + " topic."} />
    );
};