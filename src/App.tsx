import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Article from './pages/Article'
import Container from './components/Container'

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artikel" element={<Articles />} />
        <Route path="/artikel/:slug" element={<Article />} />
      </Routes>
    </Container>
  )
}
