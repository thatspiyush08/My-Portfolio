import { useState } from 'react'


import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" elements={<Layout/>}/>
      </Routes>
      
    </>
  )
}

export default App
