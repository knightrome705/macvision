import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isAuthTokenContext } from '../Context/ContextShare';



export const Headder = () => {
  const {isAuthToken,setIsAuthToken}=useContext(isAuthTokenContext);
  const logout=()=>{
    setIsAuthToken(false);
  }
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home" className="text-white">Welcome to MacVision</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home" className="text-white">Home</Nav.Link>
            <Nav.Link href="/about" className="text-white">About</Nav.Link>
            <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
           { isAuthToken?<Link to={'/'}><Button className='btn btn-warning' onClick={logout} >Logout</Button></Link>:<Link to={'/login'}><Button className='btn btn-danger' >Login</Button></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
