const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    desc: {
        type: Number,
        required: true
    },
    Tags:{
        type: [String],
        required: true
    },
    uid:{
        type: [String],
        required: true
    },
    comments:{
        type: [String],
        default: []
    },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;