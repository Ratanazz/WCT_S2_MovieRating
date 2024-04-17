import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbarr() {
  return (
    <Navbar expand="lg" bg="white" variant="light" className="border-bottom px-2">
      <Container fluid>
        <Navbar.Brand href="#" style={{ minWidth: '180px' }}>
          <img style={{ height: '64px' }} src="https://htmljstemplates.com/static_files/images/logos/new_icon_1.png" alt="new logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="me-auto">
            <Nav.Link href="#" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#" className="mx-2">Products</Nav.Link>
            <Nav.Link href="#" className="mx-2">Services</Nav.Link>
            <NavDropdown title={<span className="mx-2">Blog <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#000" className="bi bi-chevron-down" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></span>} id="navbarNavDropdown">
              <div className="customSubMenu p-4">
                <div className="container">
                  <div className="row">
                    {/* Blog items go here */}
                  </div>
                </div>
              </div>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto d-none d-lg-inline-flex">
            <Nav.Link href="#" className="mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <span className="ms-1 align-middle">Cart</span>
            </Nav.Link>
            <Nav.Link href="#" className="mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              <span className="ms-1 align-texttop">Login</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr