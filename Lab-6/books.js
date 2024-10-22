const express = require('express');
const router = express.Router();

let books = [];  // Simple array to store books data in memory

// POST: Add a new book
router.post('/', (req, res) => {
  const { title, author, description } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    description
  };

  books.push(newBook);
  res.status(201).json({ message: 'Book added successfully', book: newBook });
});

// GET: Fetch all books
router.get('/', (req, res) => {
  res.status(200).json({ books });
});

module.exports = router;
