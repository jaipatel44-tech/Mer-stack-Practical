import { useState } from 'react'
import './App.css'

function SubjectCard({ subject, hours, onChange }) {
  return (
    <div className="subject">
      <div><h3>{subject}</h3><p>{hours} planned hours</p></div>
      <div className="stepper">
        <button onClick={() => onChange(-1)}>−</button>
        <span>{hours}</span>
        <button onClick={() => onChange(1)}>+</button>
      </div>
    </div>
  )
}

function App() {
  const [plan, setPlan] = useState([
    { subject: 'React Fundamentals', hours: 2 },
    { subject: 'JavaScript Practice', hours: 3 },
    { subject: 'Database Revision', hours: 1 }
  ])
  const [focus, setFocus] = useState('Normal')

  const updateHours = (index, delta) => {
    setPlan(current => current.map((item, i) =>
      i === index ? { ...item, hours: Math.max(0, item.hours + delta) } : item
    ))
  }

  const total = plan.reduce((sum, item) => sum + item.hours, 0)

  return (
    <main className="app">
      <div className="top">
        <div><p className="label">MY STUDY BOARD</p><h1>Weekly Study Planner</h1></div>
        <select value={focus} onChange={e => setFocus(e.target.value)}>
          <option>Normal</option><option>Deep Focus</option><option>Light Review</option>
        </select>
      </div>
      <p className="hint">Props pass subject data into reusable cards. State and events update the plan instantly.</p>
      <section className="panel">
        {plan.map((item,index) => (
          <SubjectCard key={item.subject} subject={item.subject} hours={item.hours}
            onChange={delta => updateHours(index, delta)} />
        ))}
        <div className="summary"><span>Total planned time</span><strong>{total} hrs</strong></div>
        <button className="save" onClick={() => alert(`Plan saved in ${focus} mode.`)}>Save My Plan</button>
      </section>
    </main>
  )
}
export default App
