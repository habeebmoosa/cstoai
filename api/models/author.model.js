import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        required: false,
    },
    description:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
    }],
});

export const Author = mongoose.model('authors', authorSchema);