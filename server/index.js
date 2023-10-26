const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const mongoose = require("mongoose");
const app = express()

const PostModel = require('./models/post');
app.use(express.json());


mongoose.connect('mongodb+srv://ali:123@crud.psiju9w.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
}); 

app.post('/insert', async (req, res)=>{
    const Title = req.body.Title;
    const desc = req.body.desc;
    const Tags = req.body.Tags;
    const uid = req.body.uid;

    console.log(Title, desc, Tags, uid);

    const post = new PostModel({Title: Title, desc: desc, Tags: Tags, uid: uid});
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