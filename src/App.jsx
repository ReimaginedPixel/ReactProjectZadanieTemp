import { useState, useEffect } from 'react'
import MovieList from './MovieList.jsx'

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    setMovies(['Shrek', 'Król Lew', 'Toy Story'])
  }, [])

  return (
    <div>
      <h1>Biblioteka filmów</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tytuł filmu"
      />
      <button>Dodaj film</button>
      <MovieList movies={movies} />
    </div>
  )
}

export default App
