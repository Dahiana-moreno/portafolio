import { Link } from 'react-router-dom';

const Navbar = () => {

return(
  <nav className="navbar">
      <Link to="/"> July.</Link>
      <Link to="/#Home">HOME</Link>
      <Link to="/#Seccion2">ABOUT US</Link>
      <Link to="/#Contact">CONTACT</Link>
 
    </nav>
)

}
export default Navbar