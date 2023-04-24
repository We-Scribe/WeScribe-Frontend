import {Nav,  Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Home() {
  return(
    <div>
    <Navbar bg="dark">
        <Navbar.Brand href="/"><Link to = "/cis-hackathon">Thunderbirds</Link></Navbar.Brand>
        <Navbar.Brand href="/"><Link to = "/cis-hackathon/main">Main</Link></Navbar.Brand>
    
    </Navbar>
    </div>
  )
}
export default Home