import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    url:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        imgname: {
            type: String,
            required: false,
            unique: true
        },
        imgpath:{
            type: String,
            required: false
        }
    },
    content:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    tags:{
        type: [String],
        required: false
    },
    views:{
        type: Number,
        default: 0
    },
    createdDate:{
        type: Date,
        default: new Date()
    }
});

export const Post = mongoose.model('posts', postSchema);