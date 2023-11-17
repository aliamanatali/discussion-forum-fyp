const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags:{
        type: [String],
        required: true
    },
    uid:{
        type: String,
        required: true
    },
    comments:{
        type: [String],
        default: []
    },
    votes:{
        type: Number,
        default: 0
    },
    time:{
        type: Date,
        default: Date.now()
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;