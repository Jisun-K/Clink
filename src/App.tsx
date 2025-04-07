import { useState } from 'react'
import './App.css'
import AppRoutes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <GlobalStyles /> */}
      <AppRoutes />
    </>
  )
}

export default App
