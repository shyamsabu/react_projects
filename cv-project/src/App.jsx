import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Homepage/>
    </div>
  )
}

export default App
