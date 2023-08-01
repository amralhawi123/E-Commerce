import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavButtom = () => {
  return (
    <div className='navBut'>
      
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
            <span class="fa-solid fa-border-all"></span>
              <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another Products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Brands</NavDropdown.Item>
            </NavDropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Pages</Nav.Link>
            <Nav.Link href="#link">User Account</Nav.Link>
            <Nav.Link href="#link">Vendor Account</Nav.Link>
            <Nav.Link href="#link">Track My Order</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavButtom
