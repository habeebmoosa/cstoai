import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    categories:{
        type: Array,
        required: false
    },
    createdDate:{
        type: Date,
        default: new Date()
    }
});

export const Post = mongoose.model('Post', postSchema);