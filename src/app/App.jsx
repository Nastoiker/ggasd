import { useState } from 'react'
import { Header } from '../components/header/ui/header'
import { HomePage } from '../pages/home/ui/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <HomePage />
    </>
  )
}

export default App
