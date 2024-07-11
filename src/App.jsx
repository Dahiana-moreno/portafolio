import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './home/home.jsx';
import ProjectCard from './projects/CardValidation.jsx';
import ProjectGot from './projects/Got.jsx';
import ProjectMdLinks from './projects/MdLinks.jsx';
import Projectevento from './projects/Events.jsx';


import './App.css'


function App() {
  

  return (
    <>
 <Router>
  <Navbar />
  <Routes>
    <Route  path='/' element={<Home />}/>
    <Route path='/card' element={<ProjectCard />} />
    <Route path='/got' element={<ProjectGot />}/>
    <Route path='/mdlinks' element={<ProjectMdLinks />} />
    <Route path='/events' element={<Projectevento />}/>
  </Routes>
 </Router>
    </>
  )
}

export default App
