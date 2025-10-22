import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Blue Line Test</h1>

      {/* Blue horizontal line */}
      <div className="w-40 h-1 bg-blue-500 mb-6"></div>

      <p className="mb-4">Current Count: {count}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default App
