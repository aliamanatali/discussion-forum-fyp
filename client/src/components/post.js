import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function Post() {

    const [post, setPost] = useState([]);
    useEffect(() => {
        const { _id } = useParams();
        console.log(_id);
        Axios.get('http://localhost:3001/post/:id').then((response) => {
          setPost(response.data);
          console.log(response.data);
        }).catch(() => {
          console.log("error");
        });
      }
      , []);
    
  return (
    <div>
        <h1>This is the post `${_id}`</h1>
        <p></p>
    </div>
  )
}

export default Post