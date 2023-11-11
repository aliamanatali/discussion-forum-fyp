import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Question from './Question'

function Home() {
    const[postList, setPostList] = useState([]);
    
    useEffect(() => {
        Axios.get('http://localhost:3001/home').then((response) => {
          setPostList(response.data);
          console.log(response.data);
        }).catch(() => {
          console.log("error");
        });
      }
      , []);
      const questionsPerPage = 15;
      const [currentPage, setCurrentPage] = useState(1);
    
      const indexOfLastQuestion = currentPage * questionsPerPage;
      const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
      const currentQuestions = postList.slice(indexOfFirstQuestion, indexOfLastQuestion);
    
      const totalPages = Math.ceil(postList.length / questionsPerPage);
    
      const nextPage = () => {
        setCurrentPage(currentPage + 1);
      };
    
      const prevPage = () => {
        setCurrentPage(currentPage - 1);
      };
    
      const goToPage = (page) => {
        setCurrentPage(page);
      };
    
      const goToEnd = () => {
        setCurrentPage(totalPages);
      };
    
      const goToStart = () => {
        setCurrentPage(1);
      };

  return (
    <div>
    <h1>Post List</h1>
    <button className='btn btn-primary'>Create Question</button>
    <div className="question-list">
    {postList?.map(question => (
      <Question key={question.id} {...question} />
    ))}
  </div>
  <div className="pagination">
            <button onClick={goToStart} disabled={currentPage === 1}>Start</button>
            <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            <button onClick={goToEnd} disabled={currentPage === totalPages}>End</button>
  </div>
    </div>
  )};

export default Home