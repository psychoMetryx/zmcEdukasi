import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Disease from './pages/Disease'
import Posts from './pages/Posts'
import Post from './pages/Post'
import Container from './components/Container'

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disease/:slug" element={<Disease />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>
    </Container>
  )
}
