import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'  
import Home  from './pages/Home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <Header />
      <Home />
      <Footer />  
    </div>
  )
}

export default App
