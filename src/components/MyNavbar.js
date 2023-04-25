import {Nav,  Navbar, Container} from 'react-bootstrap';
import '../static/Navbar.css'
import {Link} from 'react-router-dom';

function MyNavbar() {
  return(
  <Navbar collapseOnSelect bg = "light" >
    <Container>
      <Navbar.Brand className="nav-brand" href="/">
        <Link to = "/cis-hackathon/">
          WeScribe
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className = "ml-auto">
          {/* Needs to be updated according to user is authenticated or not */}
<<<<<<< HEAD
          <Nav.Link className = "nav-link" href="/cis-hackathon/register"><span>Register</span></Nav.Link>
=======
>>>>>>> d99b2e687ce204e477819a0f8039416cb329f252
          <Nav.Link className = "nav-link" href="/cis-hackathon/login"><span>Login</span></Nav.Link>
          <Nav.Link className = "nav-link" href="/cis-hackathon/notes"><span>Notes</span></Nav.Link>
          <Nav.Link className = "nav-link" href="/cis-hackathon/main"><span>Main</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}
export default MyNavbar
