import Home from './pages/Home';
import About from './pages/About'
// import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'
import Exp from './pages/Exp'
const App = () => {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Exp />
      {/* <Project /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App;
