import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

return(
  <nav className="navbar">
      <Link to="/"> July.</Link>
      
      <Link smooth to="/#about">ABOUT</Link>
      <Link smooth to="/#skills">SKILLS</Link>
      <Link smooth to="/#projects">PROJECTS</Link>
      <Link smooth to="/#contact">CONTACT</Link>

 
    </nav>
)

}
export default Navbar