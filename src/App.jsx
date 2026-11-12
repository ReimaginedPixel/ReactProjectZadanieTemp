import { useState, useEffect } from 'react'
import MovieList from './MovieList.jsx'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(['Shrek', 'Król Lew', 'Toy Story'])
  }, [])

  return (
    <div>
      <h1>Biblioteka filmów</h1>
      <MovieList movies={movies} />
    </div>
  )
}

export default App
