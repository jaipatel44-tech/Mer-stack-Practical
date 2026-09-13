const express = require('express')
const app = express()
const PORT = 5001

app.use(express.json())

let students = [
  { id: 101, name: 'Meera Joshi', email: 'meera@example.com', course: 'BCA' },
  { id: 102, name: 'Dev Mehta', email: 'dev@example.com', course: 'MCA' },
  { id: 103, name: 'Riya Desai', email: 'riya@example.com', course: 'B.Sc. IT' }
]

app.get('/', (req, res) => {
  res.json({ message: 'Student Records REST API is running' })
})

app.get('/api/students', (req, res) => res.json(students))

app.get('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id === Number(req.params.id))
  if (!student) return res.status(404).json({ message: 'Student not found' })
  res.json(student)
})

app.post('/api/students', (req, res) => {
  const { name, email, course } = req.body
  if (!name || !email || !course) {
    return res.status(400).json({ message: 'Name, email and course are required' })
  }
  const student = { id: Date.now(), name, email, course }
  students.push(student)
  res.status(201).json({ message: 'Student added successfully', student })
})

app.put('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id === Number(req.params.id))
  if (!student) return res.status(404).json({ message: 'Student not found' })
  const { name, email, course } = req.body
  if (name) student.name = name
  if (email) student.email = email
  if (course) student.course = course
  res.json({ message: 'Student updated successfully', student })
})

app.delete('/api/students/:id', (req, res) => {
  const index = students.findIndex(s => s.id === Number(req.params.id))
  if (index === -1) return res.status(404).json({ message: 'Student not found' })
  const [student] = students.splice(index, 1)
  res.json({ message: 'Student deleted successfully', student })
})

app.use((req, res) => res.status(404).json({ message: 'Route not found' }))

app.listen(PORT, () => console.log(`Student REST API running at http://localhost:${PORT}`))
