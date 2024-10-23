import React, { useState } from 'react';
import axios from 'axios';

const LibraryForm = ({ fetchBooks }) => {
  const [bookDetails, setBookDetails] = useState({
    bookName: '',
    isbn: '',
    bookTitle: '',
    authorName: '',
    publisherName: ''
  });

  const handleChange = (e) => {
    setBookDetails({
      ...bookDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', bookDetails);
      fetchBooks();
      setBookDetails({ bookName: '', isbn: '', bookTitle: '', authorName: '', publisherName: '' });
    } catch (error) {
      console.error('Failed to add book', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookDetails.isbn}`);
      fetchBooks();
    } catch (error) {
      console.error('Failed to delete book', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/books/${bookDetails.isbn}`, bookDetails);
      fetchBooks();
    } catch (error) {
      console.error('Failed to update book', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="bookName"
        placeholder="Book Name"
        value={bookDetails.bookName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="isbn"
        placeholder="ISBN No"
        value={bookDetails.isbn}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="bookTitle"
        placeholder="Book Title"
        value={bookDetails.bookTitle}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="authorName"
        placeholder="Author Name"
        value={bookDetails.authorName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="publisherName"
        placeholder="Publisher Name"
        value={bookDetails.publisherName}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Book</button>
      <button type="button" onClick={handleUpdate}>Update Book</button>
      <button type="button" onClick={handleDelete}>Delete Book</button>
    </form>
  );
};

export default LibraryForm;
