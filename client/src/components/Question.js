import React from 'react';
import {useNavigate} from 'react-router-dom';

const Question = ({ _id, title, body, votes, comments, views, tags }) => {

  const truncateText = (text, limit) => {
    if (text && text.length && text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  const navigate = useNavigate();

  const navigateToQuestion = (_id) => {
    navigate(`/question/${_id}`);
  };

  const uniqueTags = new Set(tags);

  return (
    <div className="question" onClick={() => navigateToQuestion(_id)} >
      <div className="question-votes">
        <div className="votes">{votes} Votes</div>
        <div className="answers">
          {comments > 0 && <span>&#10004; </span>}
          {comments} Answers
        </div>
        <div className="views">{views} Views</div>
      </div>
      <div className="question-details">
        <h2 className="title">{truncateText(title, 55)}</h2>
        <p>{truncateText(body, 110)}</p>
        <div className="tags">
          {[...uniqueTags].map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
