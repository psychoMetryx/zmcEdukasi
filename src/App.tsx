import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Container from './components/Container'

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  )
}
