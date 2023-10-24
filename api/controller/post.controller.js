import mongoose from "mongoose";
import { Post } from "../models/post.model.js";

export const createPost = async (req, res) => {
    try {
        const { title, description, content, username, tags } = req.body;
        const url = title.toLowerCase().split(' ').join('-');
        const tagsLowercase = tags.map(tag => tag.toLowerCase());
        const newPost = new Post({ title, url, description, content, username, tags:tagsLowercase });
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
        res.status(200).json(post);
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