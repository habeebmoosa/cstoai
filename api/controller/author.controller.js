import { Author } from "../models/author.model.js";
import { Post } from "../models/post.model.js";

export const createAuthor = async (req, res)=>{
    try {
        const {name, profilePicture, description, username} = req.body;
        const newAuthor = new Author({name, profilePicture, description, username});
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getAuthor = async (req, res)=>{
    try {
        const username = req.params.username;
        const author = await Author.findOne({username});

        const posts = await Post.find({username});
        res.status(200).json({author, posts});
    } catch (error) {
        res.status(500).json(error);
    }
}