import React from 'react'
import Home from './pages/Home';
import About from './pages/About'
// import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'
const App = () => {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
