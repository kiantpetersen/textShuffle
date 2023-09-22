import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Splitting from 'splitting'
import TextShuffle from './Components/TextShuffle'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // Initialize Splitting.js on the target element
    Splitting();
  }, []);

  return (
    <>
      {/* <div className="text-container">
        <h1 className="text-shuffle" data-splitting="">
          Shuffle Me on Hover
        </h1>
      </div> */}
      <TextShuffle />

    </>
  )
}

export default App
