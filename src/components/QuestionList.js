import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem';

function QuestionList({ BASE_URL, onChangePage }) {
   const [questions, setQuestions] = useState([]);

   useEffect(() => {
      fetch(`${BASE_URL}/questions`)
         .then((r) => r.json())
         .then((questionsArr) => setQuestions(questionsArr));
   }, [BASE_URL]);

   if (questions.length === 0) {
      return <h2>Loading questions...</h2>;
   }

   function handleDelete(id) {
      const options = {
         method: 'DELETE',
      };

      fetch(`${BASE_URL}/questions/${id}`, options)
         .then((r) => r.json())
         .then(() => {
            const updatedQuestions = questions.filter((q) => q.id !== id);
            setQuestions(updatedQuestions);
         });
   }

   function handleAnswerChange(updatedQuestion) {
      const updatedQuestions = questions.map((question) =>
         question.id === updatedQuestion.id ? updatedQuestion : question
      );
      setQuestions(updatedQuestions);
   }

   return (
      <section>
         <h1>Quiz Questions</h1>
         <ul>
            {questions.map((question) => (
               <QuestionItem
                  key={question.id}
                  question={question}
                  BASE_URL={BASE_URL}
                  onDelete={handleDelete}
                  onAnswerChange={handleAnswerChange}
               />
            ))}
         </ul>
      </section>
   );
}

export default QuestionList;
