import {Nav,  Navbar, Container} from 'react-bootstrap';
import '../static/Navbar.css'
import {Link} from 'react-router-dom';
import logo from '../assets/index.svg';

import { connect } from 'react-redux';
import * as actions from '../actions/auth';

function MyNavbar(props) {

  const { logout, isAuthenticated, username } = props;

  return(
  <Navbar collapseOnSelect bg = "navbar" >
    <Container>
      <Navbar.Brand as={Link} className="nav-brand" to="/cis-hackathon/">
        <img className="navbar_logo" src = {logo} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className = "ml-auto">
          {!isAuthenticated ?
          [
            <Nav.Link key="1" as={Link} className = "nav-link" to="/cis-hackathon/register"><span>Register</span></Nav.Link>,
            <Nav.Link key="2" as={Link} className = "nav-link" to="/cis-hackathon/login"><span>Login</span></Nav.Link>  
          ]:[
            <Nav.Link key="3" as={Link} className = "nav-link" to="/cis-hackathon/notes"><span>Notes</span></Nav.Link>,
            <Nav.Link key="4" as={Link} className = "nav-link" to="/cis-hackathon/main"><span>Main</span></Nav.Link>,
            <Nav.Link key="5" as={Link} className = "nav-link" to="/cis-hackathon/" onClick={logout}><span>Logout</span></Nav.Link>,
          ]}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
