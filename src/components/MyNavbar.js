import {Nav,  Navbar, Container} from 'react-bootstrap';
import '../static/Navbar.css'
import {Link} from 'react-router-dom';
import logo from '../assets/index.svg';

function MyNavbar() {
  return(
  <Navbar collapseOnSelect bg = "navbar" >
    <Container>
      <Navbar.Brand className="nav-brand" href="/">
        <Link to = "/cis-hackathon/">
        <img className="navbar_logo" src = {logo} />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className = "ml-auto">
          {/* Needs to be updated according to user is authenticated or not */}
          <Nav.Link className = "nav-link" href="/cis-hackathon/register"><span>Register</span></Nav.Link>
          <Nav.Link className = "nav-link" href="/cis-hackathon/login"><span>Login</span></Nav.Link>
          <Nav.Link className = "nav-link" href="/cis-hackathon/notes"><span>Notes</span></Nav.Link>
          <Nav.Link className = "nav-link" href="/cis-hackathon/main"><span>Main</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}
export default MyNavbar
