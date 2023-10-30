import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    position:{
        type: String,
        enum: ['owner', 'author'],
        required: true,
        default: 'author'
    },
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
        required: false,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        min: 6,
        required: true
    },
    post:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
    }],
});

export const Author = mongoose.model('authors', authorSchema);