const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express()

const PostModel = require('./models/post.js');
app.use(express.json());
app.use(cors());




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

app.get('/home', async (req, res)=>{
    PostModel.find({}).exec()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(error => {
      console.error(error);
      res.send(error);
    });
});

app.get('/post/:id', async (req, res) => {
    try {
        const Questionid = req.params.id;
        console.log(Questionid + " is the id");

        if (!mongoose.Types.ObjectId.isValid(Questionid)) {
            res.status(400).send('Invalid ID');
            return;
        }

        const result = await PostModel.findById(Questionid).exec();
        console.log(result);
        if (!result) {
            res.status(404).send('Post not found');
        } else {
            res.send(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.post('/comments/:id', async (req, res) => {
    try {
        const Questionid = req.params.id;
        console.log(Questionid + " is the id");

        if (!mongoose.Types.ObjectId.isValid(Questionid)) {
            res.status(400).send('Invalid ID');
            return;
        }

        const result = await PostModel.findByIdAndUpdate(Questionid, req.body, { new: true }).exec();
        console.log(result);
        if (!result) {
            res.status(404).send('Post not found');
        } else {
            res.send(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

const run = async () => {
    try {
        await mongoose.connect('mongodb+srv://ali:123@crud.psiju9w.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            serverSelectionTimeoutMS: 30000,
        }); 
    } catch (error) {
        console.log("The error is:" + error)
    }
}

app.listen(3001, ()=>{
        console.log("Server is running on port 3001");
    });
run()