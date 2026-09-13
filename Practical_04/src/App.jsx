import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

const spots = [
  { name: 'Riverfront Walk', type: 'Leisure', note: 'A calm evening route beside the city river.' },
  { name: 'Science Gallery', type: 'Learning', note: 'Interactive exhibits for curious minds.' },
  { name: 'Old Market Lane', type: 'Culture', note: 'Local food, crafts and neighborhood stories.' }
]

function Home(){return <Page title="Plan your next city day" text="A small single-page guide built with React Router. Use the navigation to switch sections without a full page reload."/>}
function Places(){return <Page title="Places to Explore"><div className="cards">{spots.map(s=><article className="card" key={s.name}><span>{s.type}</span><h3>{s.name}</h3><p>{s.note}</p></article>)}</div></Page>}
function Schedule(){return <Page title="Sample Day"><div className="timeline"><p><b>09:00</b> · Science Gallery</p><p><b>13:00</b> · Old Market Lane</p><p><b>18:30</b> · Riverfront Walk</p></div></Page>}
function About(){return <Page title="About the Guide" text="This SPA demonstrates BrowserRouter, Routes, Route and NavLink with a clean custom interface."/>}
function Page({title,text,children}){return <section className="page"><p className="kicker">CITY NOTE</p><h1>{title}</h1>{text&&<p>{text}</p>}{children}</section>}
function App(){
  return <BrowserRouter><div className="shell"><nav><div className="brand">DayTrip</div><div className="links"><NavLink to="/">Home</NavLink><NavLink to="/places">Places</NavLink><NavLink to="/schedule">Schedule</NavLink><NavLink to="/about">About</NavLink></div></nav><main><Routes><Route path="/" element={<Home/>}/><Route path="/places" element={<Places/>}/><Route path="/schedule" element={<Schedule/>}/><Route path="/about" element={<About/>}/><Route path="*" element={<Page title="404" text="This route does not exist."/>}/></Routes></main></div></BrowserRouter>
}
export default App
