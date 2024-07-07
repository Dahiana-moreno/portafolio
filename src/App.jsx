import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './home/home.jsx';


import './App.css'


function App() {
  

  return (
    <>
 <Router>
  <Navbar />
  <Routes>
    <Route  path='/' element={<Home />}/>
  </Routes>
 </Router>
    </>
  )
}

export default App
