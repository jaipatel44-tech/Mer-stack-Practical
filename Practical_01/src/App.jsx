import './App.css'

function ClubCard({ title, focus, meeting, members }) {
  return (
    <article className="club-card">
      <span className="badge">{members} members</span>
      <h2>{title}</h2>
      <p><b>Focus:</b> {focus}</p>
      <p><b>Meeting:</b> {meeting}</p>
      <button>View Club</button>
    </article>
  )
}

function App() {
  const clubs = [
    { title: 'Code Forge', focus: 'Web Development', meeting: 'Tuesday · 4:00 PM', members: 28 },
    { title: 'Design Circle', focus: 'UI/UX & Branding', meeting: 'Wednesday · 3:30 PM', members: 19 },
    { title: 'Robo Lab', focus: 'Robotics & IoT', meeting: 'Friday · 2:00 PM', members: 24 }
  ]

  return (
    <main className="app">
      <header>
        <p className="eyebrow">CAMPUS CONNECT</p>
        <h1>Student Club Directory</h1>
        <p className="intro">Reusable React cards for discovering active campus communities.</p>
      </header>
      <section className="club-grid">
        {clubs.map((club) => <ClubCard key={club.title} {...club} />)}
      </section>
    </main>
  )
}

export default App
