import { Author } from "../models/author.model.js";
import { Post } from "../models/post.model.js";


// public controller --------------------------------------------------------------------
export const getAuthor = async (req, res) => {
    try {
        const username = req.params.username;
        const author = await Author.findOne({ username });

        const posts = await Post.find({ username });
        const newAuthor = {
            name: author.name,
            email: author.email,
            profilePicture: author.profilePicture,
            username: author.username,
            description: author.description,
        }

        res.status(200).json({ author: newAuthor, posts });
    } catch (error) {
        res.status(500).json(error);
    }
}


// private controller ----------------------------------------------------------------------

export const deleteAuthor = async (req, res) => {
    const id = req.id;
    const position = req.position;
    const username = req.params.username;

    try {
        const author = await Author.findOne({ username });
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }

        if (author.position === "owner" && id !== author._id) {
            return res.status(401).json({ message: "You are not authorized to delete this author." });
        }

        if (id === author._id || position === "owner") {
            await Author.findOneAndDelete({ username });
            return res.status(200).json({ message: "Author deleted successfully!" });
        } else {
            return res.status(401).json({ message: "You are not authorized to delete this author." });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


export const updateAuthor = async (req, res) => {
    const id = req.userId;
    try {
        const author = await Author.findOne({ _id: id });
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }

        const { name, email, profilePicture, description, social } = req.body;
        const newAuthor = {
            name: name || author.name,
            email: email || author.email,
            profilePicture: profilePicture || author.profilePicture,
            description: description || author.description,
            social: social || author.social,
        };

        await Author.findByIdAndUpdate({ _id: id }, newAuthor, { new: true });
        res.status(200).json({ message: "Author updated successfully!"});
    } catch (error) {
        res.status(500).json(error);
    }
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
                return res.status(200).json({ position: "Author" });
            }
        } else {
            return res.status(404).json({ message: "Author not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error while fetching authors" });
    }
};

export const getAuthorProfile = async (req, res) => {
    try {
        const author = await Author.findOne({ _id: req.userId });

        const newAuthor = {
            position: author.position,
            name: author.name,
            email: author.email,
            profilePicture: author.profilePicture,
            username: author.username,
            description: author.description,
            social: author.social,
        };

        res.status(200).json(newAuthor);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const changePosition = async (req, res) => {
    const id = req.userId;
    try {
        const {position} = req.body;
        const isOwner = await Author.findOne({ _id: id, position: "owner" });
        if (!isOwner) {
            return res.status(401).json({ message: "You are not authorized to change position" });
        }

        const author = await Author.findOne({ username: req.params.username });
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }

        await Author.findByIdAndUpdate({ _id: author._id }, { position }, { new: true });
        res.status(200).json({ message: "Position changed successfully!"});
    } catch (error) {
        res.status(500).json(error);
    }
}