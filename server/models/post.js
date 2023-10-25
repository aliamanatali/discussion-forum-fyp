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
        type: String, Array,
        required: true
    },
    uid:{
        type: String,
        required: true
    },
    comments:{
        type: String, Array,
        required: true
    },
    
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;