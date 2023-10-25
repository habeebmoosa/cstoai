import multer from "multer";
import path from "path";
import crypto from "crypto";

import { Post } from "../models/post.model.js";
import { Author } from "../models/author.model.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 1000000 * 100 }, 
}).single('myimage'); 

export const uploadImage = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if(err) {
                res.status(500).json({ message: err.message });
            } else {
                const newImage = {
                    imgname: req.file.filename,
                    imgpath: req.file.path,
                };
                res.status(201).json(newImage);
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, description, image, content, username, tags } = req.body;
        const url = title.toLowerCase().split(' ').join('-');
        const tagsLowercase = tags.map(tag => tag.toLowerCase());
        const newPost = new Post({ title, url, description, image, content, username, tags:tagsLowercase });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const readPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const readPost = async (req, res) => {
    try {
        const post = await Post.findOne({ url: req.params.url });
        post.views += 1;
        await post.save();

        const author = await Author.findOne({ username: post.username });
        res.status(200).json({ post, author });    
    } catch (error) {
        res.status(404).json(error);
    }
}

export const readPostsByTag = async (req, res) => {
    try {
        const posts = await Post.find({ tags: req.params.tag });
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json(error);
    }
}