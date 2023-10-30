import React, { useState } from "react";
import { PostEditor } from "../components/PostEditor";
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";

export const Post = ({
    title,
    setTitle,
    description,
    setDescription,
    setImage,
    isImageUploaded,
    setIsImageUploaded,
    content,
    setContent,
    tags,
    setTags,
    tag,
    setTag,
    triggerPost,
    imageUrl,
    btn
})=>{
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="form flex flex-col space-y-5 p-5">
                <div className="title flex flex-col space-y-1">
                    <label htmlFor="title" className="text-1xl font-bold text-gray-600">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="border-2 border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="description title flex flex-col space-y-1">
                    <label htmlFor="description" className="text-1xl font-bold text-gray-600">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        className="border-2 border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="image flex flex-col space-y-1">
                    <label htmlFor="image" className="text-1xl font-bold text-gray-600">Image</label>
                    <div className="">
                        {
                            isImageUploaded ? (
                                <div className="flex flex-col gap-2">
                                    {
                                        imageUrl ? (
                                            <img src={imageUrl} alt="" className="my-8 rounded-md" />
                                        ) : (
                                            <img src={imagePreview} alt="" className="my-8 rounded-md" />
                                        )
                                    }
                                    <button className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out py-2 px-4 rounded-md text-center text-white"
                                        onClick={() => {
                                            setImage(null);
                                            setImagePreview(null);
                                            setIsImageUploaded(false);
                                        }}
                                    >Remove</button>
                                </div>
                            ) : (
                                <input type="file" name="image" id="image" className="border-2 border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                    onChange={(e) => {
                                        setImage(e.target.files[0]);
                                        setImagePreview(URL.createObjectURL(e.target.files[0]));
                                        setIsImageUploaded(true);
                                    }}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="body title flex flex-col space-y-1">
                    <label htmlFor="body" className="text-1xl font-bold text-gray-600">Body</label>
                    <PostEditor value={content} onChange={setContent} />
                </div>
                <div className="tags title flex flex-col space-y-1">
                    <label htmlFor="tags" className="text-1xl font-bold text-gray-600">Tags</label>
                    <div className="flex flex-row gap-3">
                        <input type="text" name="tags" className="border-2 border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                        />
                        <button className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out py-2 px-4 rounded-md text-center text-white"
                            onClick={() => {
                                setTags([...tags, tag]);
                                setTag("");
                            }}
                        >ADD</button>
                    </div>
                    <div className="flex flex-row gap-2">
                        {tags.map((tag, index) => (
                            <div className="bg-gray-600 text-white rounded-md px-2 py-1 text-sm" key={index}
                                onClick={() => {
                                    setTags(tags.filter((item) => item !== tag));
                                }}
                            >{tag}</div>
                        ))}
                    </div>
                </div>
                <div className="submit flex flex-row gap-3">
                    <button type="submit" className="
                        bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out py-2 px-4 rounded-md text-center text-white"
                        onClick={() => {
                            triggerPost();
                        }}
                    >{btn}</button>
                    <button className="
                        bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out py-2 px-4 rounded-md text-center text-white"
                        onClick={() => {
                            setTitle("");
                            setDescription("");
                            setImage(null);
                            setImagePreview(null);
                            setIsImageUploaded(false);
                            setContent("");
                            setTags([]);
                            setTag("");
                        }}
                    >Reset</button>
                    <button className="
                        bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out py-2 px-4 rounded-md text-center text-white"
                        onClick={() => {
                           navigate("/admin/dashboard/posts");
                        }}
                    >Cancel</button>
                </div>
            </div>
    )
}