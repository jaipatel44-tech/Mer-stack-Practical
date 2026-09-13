const express = require('express')
const app = express()
const PORT = 5000

app.use(express.json())

const accessLog = (req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`)
  next()
}
app.use(accessLog)

const books = [
  { id: 1, title: 'Atomic Habits', category: 'Self Growth' },
  { id: 2, title: 'Clean Code', category: 'Technology' },
  { id: 3, title: 'The Alchemist', category: 'Fiction' }
]

app.get('/', (req, res) => {
  res.json({ message: 'Campus Library API is running' })
})

app.get('/api/books', (req, res) => {
  res.json(books)
})

app.get('/api/books/:id', (req, res) => {
  const book = books.find(item => item.id === Number(req.params.id))
  if (!book) return res.status(404).json({ message: 'Book not found' })
  res.json(book)
})

app.post('/api/books', (req, res) => {
  const { title, category } = req.body
  if (!title || !category) return res.status(400).json({ message: 'Title and category are required' })
  const newBook = { id: books.length + 1, title, category }
  books.push(newBook)
  res.status(201).json({ message: 'Book added successfully', book: newBook })
})

app.use((req, res) => res.status(404).json({ message: 'Route not found' }))

app.listen(PORT, () => console.log(`Campus Library API running at http://localhost:${PORT}`))
