import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PostList from './components/PostList'
import PostDetails from './components/PostDetails'

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </>
  )
}

export default App
