
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home.jsx'
import Careers from './pages/Careers.jsx'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
