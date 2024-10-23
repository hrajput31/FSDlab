import React, { useState } from 'react';
import LibraryForm from './LibraryForm';
import LibraryTable from './LibraryTable';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const updateBook = (isbn, updatedDetails) => {
    setBooks(
      books.map((book) => (book.isbn === isbn ? updatedDetails : book))
    );
  };

  return (
    <div className="App">
      <h1>Library Management System</h1>
      <LibraryForm addBook={addBook} deleteBook={deleteBook} updateBook={updateBook} />
      <LibraryTable books={books} />
    </div>
  );
}

export default App;
