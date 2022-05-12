import React, { useState } from 'react';
import AdminNavBar from './AdminNavBar';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

function App() {
   const [page, setPage] = useState('List');
   const BASE_URL = 'http://localhost:4000';

   return (
      <main>
         <AdminNavBar onChangePage={setPage} />
         {page === 'Form' ? (
            <QuestionForm BASE_URL={BASE_URL} onChangePage={setPage} />
         ) : (
            <QuestionList BASE_URL={BASE_URL} />
         )}
      </main>
   );
}

export default App;
