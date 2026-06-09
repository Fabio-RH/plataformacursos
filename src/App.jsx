import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CursoEspecifico from './pages/CursoEspecifico.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CursoEspecifico />} />
        <Route path="/curso/:id" element={<CursoEspecifico />} />
      </Routes>
    </BrowserRouter>
  )
}
