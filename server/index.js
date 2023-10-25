const express = require("express");
const mongoose = require("mongoose");
const app = express()

const PostModel = require('./models/post');
app.use(express.json());


app.post('insert', async (req, res)=>{
    const Title = req.body.Title;
    const desc = req.body.desc;
    const Tags = req.body.Tags;

    console.log(Title, desc, Tags);

    const post = new PostModel({Title: Title, desc: desc, Tags: Tags});
    try{
        await post.save();
        res.send("inserted data");
    }
    catch(err){
        console.log(err);
    }
});
 app.listen(3001, ()=>{
        console.log("Server is running on port 3001");
    });