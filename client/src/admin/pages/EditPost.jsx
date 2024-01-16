import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../components/Post";
import axios from "axios";

export const EditPost = () => {
    const navigate = useNavigate();

    if (!localStorage.getItem("token")) {
        navigate('/admin/auth/signin');
    }

    const [post, setPost] = useState({});
    const { url } = useParams();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [isImageUploaded, setIsImageUploaded] = useState(true);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/readbyadmin/${url}`, {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`,
                    },
                });

                console.log(post);
                console.log(response.data);

                setTitle(response.data.title);
                setDescription(response.data.description);
                setContent(response.data.content);
                setTags(response.data.tags);
                setImageUrl(`${import.meta.env.VITE_GET_IMAGE_URL}${response.data.imgname}${import.meta.env.VITE_IMAGE_VIEW_TOKEN}`);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const triggerPost = async (status) => {
        try {
            await axios.put(`${import.meta.env.VITE_API_BASE_URL}/post/update/${url}`, {
                status,
                title,
                description,
                content,
                tags
            }, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            });
            alert("Post updated successfully");
            navigate("/admin/dashboard/posts");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col item-center justify-center lg:ml-64 lg:mt-6 lg:w-full">
            <div className="heading text-3xl font-bold text-center select-none">
                <h1>Edit Post</h1>
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
                imageUrl={imageUrl}
                btn={"Update Post"}
            />
        </div>
    )
}