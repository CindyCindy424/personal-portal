import { useState } from 'react'
import Index from './pages'
import './App.css'
import { BrowserRouter, HashRouter, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <main>
      <Routes>
          <Route path='/index' exact element={<Index/>}/>
          <Route path='*' exact element={<Index/>}/>
      </Routes>
      </main>
    </HashRouter>
  )
}

export default App
