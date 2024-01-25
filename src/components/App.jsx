import { Route, Routes } from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'

function App() {

  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
