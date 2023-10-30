import { Author } from "../models/author.model.js";
import { Post } from "../models/post.model.js";


// public controller --------------------------------------------------------------------
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


// private controller ----------------------------------------------------------------------

export const deleteAuthor = async (req,res)=>{
    const id = req.id;
    try {
        await Author.findOneAndDelete({_id: id});
        res.status(200).json({message:"User deleted successfully!"})
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateAuthor = async (req,res)=>{
}

export const getAuthors = async (req, res) => {
    const id = req.userId;

    try {
        const requestingAuthor = await Author.findOne({ _id: id });

        if (requestingAuthor) {
            if (requestingAuthor.position === "owner") {
                const authors = await Author.find();

                const data = authors.map(author => {
                    return {
                        _id: author._id,
                        name: author.name,
                        email: author.email,
                        username: author.username,
                        position: author.position
                    }
                });
                
                return res.status(200).json(data);
            } else {
                return res.status(403).json({ message: "You are not an owner" });
            }
        } else {
            return res.status(404).json({ message: "Author not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error while fetching authors" });
    }
};
