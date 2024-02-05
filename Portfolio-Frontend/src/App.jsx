import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="/" elements={<Layout />}/>
      </Routes>
      
    </>
  )
}

export default App
