const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express()

const PostModel = require('./models/post.js');
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://ali:123@crud.psiju9w.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
}); 

app.post('/insert', async (req, res)=>{
    const title = req.body.title;
    const body = req.body.body;
    const tags = req.body.tags;
    const uid = req.body.uid;

    console.log('Inserted',title, body, tags, uid);

    const post = new PostModel({title: title, body: body, tags: tags, uid: uid});
    try{
        await post.save();
        res.send("inserted data");
    }
    catch(err){
        console.log(err);
        res.status(500).send("Error inserting data");
    }
});
 app.listen(3001, ()=>{
        console.log("Server is running on port 3001");
    });