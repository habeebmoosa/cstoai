import multer from "multer";
import path from "path";

import { Post } from "../models/post.model.js";
import { Author } from "../models/author.model.js";

//public controllers ------------------------------------------------------------------------------------

export const readPosts = async (req, res) => {
    const query = req.query;
    try {
        const searchFilter = {
            title: {
                $regex: query.search,
                $options: 'i'
            }
        };

        const posts = await Post.find(query.search ? searchFilter : null);
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

export const readPostsBySearch = async (req, res) => {
    try {
        const search = req.params.search;
        const posts = await Post.find({ $text: { $search: search } });
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json(error);
    }
}



//Private controllers ----------------------------------------------------------------------------------


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
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                const imgname = req.file.filename;
                const imgpath = req.file.path;
                res.status(201).json({
                    imgname,
                    imgpath,
                    message: 'Image uploaded successfully'
                });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, description, imgname, imgpath, content, tags } = req.body;
        const username = req.username;
        const url = title.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '-');
        const tagsLowercase = tags.map(tag => tag.toLowerCase());
        const newPost = new Post({ title, url, description, imgname, imgpath, content, username, tags: tagsLowercase });
        await newPost.save();

        res.status(201).json({
            url: newPost.url,
            message: 'Post created successfully'
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatePost = async (req, res) => {
    const username = req.username;
    try {
        const { status, title, description, imgname, imgpath, content, tags } = req.body;
        const tagsLowercase = tags.map(tag => tag.toLowerCase());
        
        const post = await Post.findOneAndUpdate({ url: req.params.url,
            username
         }, { status, title, description, imgname, imgpath, content, tags: tagsLowercase }, { new: true });

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json(error);
    }
}

export const deletePost = async (req, res) => {
    try {
        await Post.findOneAndDelete({ url: req.params.url });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(404).json(error);
    }
}

export const readPostsByUser = async (req, res) => {
    const username = req.username;
    try {
        const posts = await Post.find({ username })
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error)
    }
}