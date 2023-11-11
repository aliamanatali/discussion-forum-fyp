// // import React, { useState, useEffect } from 'react';
// // import Question from './Question';

// // const QuestionList = () => {
// //     const[postList, setPostList] = useState([]);
    
// //     // useEffect(() => {
// //     //     Axios.get('http://localhost:3001/home').then((response) => {
// //     //       setPostList(response.data);
// //     //       console.log(response.data);
// //     //     }).catch(() => {
// //     //       console.log("error");
// //     //     });
// //     //   }
// //     //   , []);

// //   const questions = [
// //     { id: 1, title: 'How to design a Stack Overflow-like frontend with responsive layout and interactive features for optimal user engagement?', content: "I'm working on a project and need help designing the frontend. Any tips or best practices to create an intuitive and engaging user interface? I want to ensure a seamless user experience and incorporate elements similar to Stack Overflow's frontend design.", votes: 10, answers: 5, views: 100, tags: ['frontend', 'design'] },
// //     { id: 2, title: 'What is the best way to learn web development?', content: "I'm a beginner and want to learn web development. Where should I start?", votes: 15, answers: 8, views: 120, tags: ['web development', 'learning', 'mern', 'react'] },
// //     { id: 3, title: 'React vs Angular: Which one to choose?', content: "I'm confused between React and Angular. What are the pros and cons of each?", votes: 20, answers: 12, views: 150, tags: ['React', 'Angular'] },
// //     { id: 4, title: 'How to deploy a Node.js application to Heroku?', content: "I've built a Node.js app and want to deploy it. Any step-by-step guide for Heroku deployment?", votes: 8, answers: 3, views: 80, tags: ['Node.js', 'Heroku'] },
// //   ];

//   const questionsPerPage = 15;
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastQuestion = currentPage * questionsPerPage;
//   const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
//   const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

//   const totalPages = Math.ceil(questions.length / questionsPerPage);

//   const nextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

//   const goToEnd = () => {
//     setCurrentPage(totalPages);
//   };

//   const goToStart = () => {
//     setCurrentPage(1);
//   };

//   return (
//     <div className="question-list">
//       {currentQuestions.map(question => (
//         <Question key={question.id} {...question} />
//       ))}
//       <div className="pagination">
//         <button onClick={goToStart} disabled={currentPage === 1}>Start</button>
//         <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
//         <button onClick={goToEnd} disabled={currentPage === totalPages}>End</button>
//       </div>
//     </div>
//   );
// };

// // export default QuestionList;
