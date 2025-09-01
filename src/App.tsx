import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Disease from './pages/Disease'
import Container from './components/Container'

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disease/:slug" element={<Disease />} />
      </Routes>
    </Container>
  )
}
