import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(['Shrek', 'Król Lew', 'Toy Story'])
  }, [])

  return (
    <div>
      <h1>Biblioteka filmów</h1>
    </div>
  )
}

export default App
