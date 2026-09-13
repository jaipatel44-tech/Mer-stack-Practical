import { useState } from 'react'
import './App.css'

const empty = { name: '', email: '', semester: '', phone: '' }

function App() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [registrations, setRegistrations] = useState([])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.semester) e.semester = 'Choose a semester'
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter 10 digits'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = e => {
    e.preventDefault()
    if (!validate()) return
    setRegistrations([...registrations, { ...form, id: Date.now() }])
    setForm(empty); setErrors({})
  }

  return (
    <main className="app">
      <header><span>ACADEMIC PORTAL</span><h1>Workshop Registration</h1><p>Register students for the next skill-building workshop.</p></header>
      <section className="layout">
        <form onSubmit={submit} className="form-card">
          <h2>Participant Details</h2>
          <label>Full Name<input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Jay Patel"/>{errors.name&&<small>{errors.name}</small>}</label>
          <label>Email<input name="email" value={form.email} onChange={handleChange} placeholder="name@example.com"/>{errors.email&&<small>{errors.email}</small>}</label>
          <label>Semester<select name="semester" value={form.semester} onChange={handleChange}><option value="">Select semester</option><option>Semester 1</option><option>Semester 2</option><option>Semester 3</option><option>Semester 4</option></select>{errors.semester&&<small>{errors.semester}</small>}</label>
          <label>Phone<input name="phone" value={form.phone} onChange={handleChange} placeholder="10 digit mobile number"/>{errors.phone&&<small>{errors.phone}</small>}</label>
          <button>Register Participant</button>
        </form>
        <div className="list-card"><h2>Registered Participants</h2>
          {registrations.length===0 ? <p className="empty">No registrations yet.</p> :
            registrations.map(r => <div className="person" key={r.id}><strong>{r.name}</strong><span>{r.semester} · {r.email}</span></div>)}
        </div>
      </section>
    </main>
  )
}
export default App
