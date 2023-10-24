import { Author } from "../models/author.model.js";

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
        const author = await Author.findOne({username: username}).populate('posts');
        // .exec(
        //     (err, post)=>{
        //         if(err){
        //             return res.status(500).json(err);
        //         }else{
        //             return res.status(200).json(post);
        //         }
        //     }
        // );

        if(!author){
            return res.status(404).json({message: 'Author not found'});
        }

        res.status(200).json(author);
    } catch (error) {
        res.status(500).json(error);
    }
}