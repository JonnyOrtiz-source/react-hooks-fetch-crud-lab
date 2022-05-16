import React from 'react';

function QuestionItem({ BASE_URL, question, onDelete, onAnswerChange }) {
   const { id, prompt, answers, correctIndex } = question;

   const options = answers.map((answer, index) => (
      <option key={index} value={index}>
         {answer}
      </option>
   ));

   function handleDelete(e) {
      onDelete(id);
   }

   function handleAnswerChange(e) {
      const options = {
         method: 'PATCH',
         headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify({ correctIndex: e.target.value }),
      };

      fetch(`${BASE_URL}/questions/${question.id}`, options)
         .then((r) => r.json())
         .then((updatedQuestion) => onAnswerChange(updatedQuestion));
   }

   return (
      <li key={id}>
         <h4>Question {id}</h4>
         <h5>Prompt: {prompt}</h5>
         <label>
            Correct Answer:
            <select defaultValue={correctIndex} onChange={handleAnswerChange}>
               {options}
            </select>
         </label>
         <button onClick={handleDelete}>Delete Question</button>
      </li>
   );
}

export default QuestionItem;
