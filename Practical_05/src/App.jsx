import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://openlibrary.org/subjects/javascript.json?limit=4')
      .then(res => res.json())
      .then(data => setBooks(data.works || []))
      .catch(() => setBooks([]))

    axios.get('https://dummyjson.com/products/category/laptops?limit=4')
      .then(res => setProducts(res.data.products || []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  return <main className="app">
    <header><p className="tag">API EXPLORER</p><h1>Learn & Gear Dashboard</h1><p>Fetch API powers the reading list; Axios powers the laptop catalog.</p></header>
    {loading ? <div className="loader">Loading live data…</div> : <div className="sections">
      <section><div className="section-head"><h2>JavaScript Reading Shelf</h2><span>Fetch API</span></div>
        <div className="grid">{books.map((b,i)=><article key={i}><h3>{b.title}</h3><p>Author: {b.authors?.[0]?.name || 'Unknown author'}</p></article>)}</div>
      </section>
      <section><div className="section-head"><h2>Laptop Picks</h2><span>Axios</span></div>
        <div className="grid">{products.map(p=><article key={p.id}><h3>{p.title}</h3><p>Category: {p.category}</p><strong>${p.price}</strong></article>)}</div>
      </section>
    </div>}
  </main>
}
export default App
