import React from 'react';

function QuestionItem({ BASE_URL, question, onDelete }) {
   const { id, prompt, answers, correctIndex } = question;

   const options = answers.map((answer, index) => (
      <option key={index} value={index}>
         {answer}
      </option>
   ));

   function handleDelete(e) {
      onDelete(id);
   }

   return (
      <li key={id}>
         <h4>Question {id}</h4>
         <h5>Prompt: {prompt}</h5>
         <label>
            Correct Answer:
            <select defaultValue={correctIndex}>{options}</select>
         </label>
         <button onClick={handleDelete}>Delete Question</button>
      </li>
   );
}

export default QuestionItem;
