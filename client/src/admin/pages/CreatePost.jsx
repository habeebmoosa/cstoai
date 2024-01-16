import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Post } from "../components/Post";
import { storage } from "../../firebase";
import {ref, uploadBytes} from "firebase/storage";

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

    const triggerPost = async (status) => {
        const imageName = image.name + Date.now();
        const imagePath = "images/"+imageName;

        try {
            if(image !== null){
                const imageRef = ref(storage, `images/${imageName}`);
                const uploadTask = await uploadBytes(imageRef, image);
                console.log(uploadTask);
            }


            await Axios.post(`${import.meta.env.VITE_API_BASE_URL}/post/create`, {
                status: status,
                title,
                description,
                imgname: imageName,
                imgpath: imagePath,
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
                btn={"Publish"}
            />
        </div>
    );
};
