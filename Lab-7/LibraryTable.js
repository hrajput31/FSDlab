import React from 'react';

const LibraryTable = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Book Name</th>
          <th>ISBN No</th>
          <th>Book Title</th>
          <th>Author Name</th>
          <th>Publisher Name</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td>{book.bookName}</td>
            <td>{book.isbn}</td>
            <td>{book.bookTitle}</td>
            <td>{book.authorName}</td>
            <td>{book.publisherName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LibraryTable;
