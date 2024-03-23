import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className='bg-red-600 text-yellow-400' >Developer_kaushal</h1> */}

    <div className='flex gap-10'>
    <Card name="Sonali" btn="click me" />
    <Card />
    </div>


    </>
  )
}

export default App
