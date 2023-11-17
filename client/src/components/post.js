import Axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function Post() {

    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        console.log(id);
        Axios.get(`http://localhost:3001/post/${id}`).then((response) => {
          setPost(response.data);
          console.log(response.data);
        }).catch(() => {
          console.log("error");
        });
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();
    
        if (!comment) {
            alert('Please add a comment');
            return;
        }
    
        const updatedPost = { ...post }; // Copy the old post object
        updatedPost.comments = [...updatedPost.comments, comment]; 

        setPost(updatedPost);
        Axios.post(`http://localhost:3001/comments/${id}`, {
            comments: updatedPost.comments,
        }).then(() => {
            console.log("Success: Comment added");
        }).catch((error) => {
            console.log("Error:", error);
        });
        console.log(updatedPost.comments)
        setComment('');
    };
    

    return (
        <div className='container border'>
            <h3 className='mt-5'>{post.title}</h3>
            <hr></hr>
            <p className='mt-3'>{post.body}</p>
            <b>Tags:</b>
            <p className="tags">{
                post.tags?.map((tag) => (
                    <span>{tag}   </span>
                ))
            }</p>
            <b>Answers:</b>
            <p className="comments">{
                post.comments?.map((comment) => (
                    <p>{comment}</p>
                ))
            }</p>
            <hr></hr>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    id="comments"
                    className="form-control"
                    name="comment"
                    placeholder="Answer the question"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}>
                </input>
                <button className="btn btn-primary mt-5" type="Submit" value="Submit">Post Your Answer</button>
            </form>
        </div>
    )
}

export default Post