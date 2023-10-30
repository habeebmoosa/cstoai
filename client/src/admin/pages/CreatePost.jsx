import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Post } from "../components/Post";

export const CreatePost = () => {
    const navigate = useNavigate();

    if(!localStorage.getItem("token")){
        navigate('/admin/auth/signin');
    }

    const [image, setImage] = useState(null);
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    const triggerPost = async () => {
        try {

            const formData = new FormData();
            formData.append("myimage", image);

            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                    Authorization: `${localStorage.getItem("token")}`,
                },
            };

            const res = await Axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/post/uploadimage`,
                formData,
                config
            );


            await Axios.post(`${import.meta.env.VITE_API_BASE_URL}/post/create`, {
                title,
                description,
                imgname: res.data.imgname,
                imgpath: res.data.imgpath,
                content,
                tags
            },{
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            });

            alert("Post created successfully");
            navigate("/admin/dashboard/posts");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col item-center justify-center lg:ml-52 xl:ml-80 lg:mt-6 lg:w-full">
            <div className="heading text-3xl font-bold text-center select-none">
                <h1>Create Post</h1>
            </div>
            <Post 
                title={title}
                description={description}
                content={content}
                tags={tags}
                tag={tag}
                isImageUploaded={isImageUploaded}
                setTitle={setTitle}
                setDescription={setDescription}
                setImage={setImage}
                setIsImageUploaded={setIsImageUploaded}
                setContent={setContent}
                setTags={setTags}
                setTag={setTag}
                triggerPost={triggerPost}
                btn={"Create Post"}
            />
        </div>
    );
};
