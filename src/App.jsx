import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Esportes from './pages/Esportes'
import Login from './pages/Login'
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414] pt-4">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Esportes" element={<Esportes />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  )
}

export default App