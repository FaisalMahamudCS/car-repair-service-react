import React from 'react';
import { Row ,Col,Card,Navbar,Container,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
    return (
       <header>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand   as={Link}  to="/">Car Doctor</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
 {
   user ?
   <Nav.Link as={Link}  to="/"><button className='btn btn-link text-white text-decoration-none'>SignOut <img style={{width:'25px'}} src={user.photoURL} alt="" srcset="" /> </button></Nav.Link>
   :
   <Nav.Link as={Link}  to="/login">Login</Nav.Link>
 }
 
  
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
       </header>
    );
};

export default Header;