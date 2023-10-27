import React, { useState } from 'react';
import Axios from 'axios';

function Createpost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please add a title');
      return;
    }

    if (!body) {
      alert('Please add a body');
      return;
    }

    if (!tags) {
      alert('Please add at least one tag');
      return;
    }

    const tagsArray = tags.split(',').map((tag) => tag.trim());

    Axios.post('http://localhost:3001/insert', {
      uid: ' ',
      title: title,
      body:body,
      tags: tagsArray,
    }).then(() => {
      console.log("success");
    }).catch(() => {
      console.log("error");
    });

    const post = {
      uid:" ",  //params.id
      title,
      body,
      tags: tagsArray,
    };



    setTitle('');
    setBody('');
    setTags('');
    console.log(post);
  };

  return (
    <div className="createpost" style={{ width: '70%' }}>
      <div className='AskQuestion'>
        <h2>Ask a public Question</h2>
      </div>
      <div className='border rounded p-4 mb-4 bluecard'>
        <h5>Writing a good question</h5>
        <p>
          You're prepared to pose a question within a discussion format. If you
          have a question on a topic, explore the relevant categories here to
          find the appropriate platform for your inquiry.
        </p>
        <strong id='steps'>Steps</strong>
        <ul id='steps'>
          <li>Summarize the problem in one title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you’ve tried and what you expected to happen.</li>
          <li>Add "tags" which help surface your question to members of
            the community.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <div className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group d-flex flex-column border rounded p-4' id='whiteBg'>
            <label htmlFor="title">
              <strong>Title</strong>
            </label>
            <small className="form-text text-muted">
              Be specific and imagine you’re asking a question to another person.
            </small>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              placeholder="What is cpp?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className='form-group d-flex flex-column mt-4 border rounded p-4 ' id='whiteBg'>
            <label htmlFor="body">
              <strong>What are the details of your problem?</strong>
            </label>
            <small className="form-text text-muted">
              Introduce the problem and go deeper into the title's details.
            </small>
            <textarea
              id="body"
              name="body"
              className="form-control"
              placeholder="Explain your problem in depth (min 20 characters)"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className='form-group d-flex flex-column mt-4 border rounded p-4' id='whiteBg'>
            <label htmlFor="tags">
              <strong>Tags</strong>
            </label>
            <small className="form-text text-muted">
              Add up to 5 tags to describe what your question is about (comma-separated).
            </small>
            <input
              type="text"
              id="tags"
              className="form-control"
              name="tags"
              placeholder="Tags (comma-separated)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <input className="btn btn-primary mt-5" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Createpost;
