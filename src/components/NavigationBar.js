import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Form, Button } from 'react-bootstrap'
import Logo from '../images/Logo.png'
export const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <img src={Logo} style={{width: "3rem", height: "3rem"}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ms-auto'>
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="List" id="collasible-nav-dropdown">
                        <LinkContainer to="/movie-list">
                            <NavDropdown.Item>Movie List</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/theater-list'>
                            <NavDropdown.Item>Theater List</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    <LinkContainer to='/about-us'>
                        <Nav.Link>About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/contact-us'>
                        <Nav.Link>Contact Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/check-out">
                        <Nav.Link>Check Out</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form className='col-4'>
                    <Form.Control type='search' placeholder='Search' className='me-2'/>
                </Form>
                <Nav className='ms-5'>
                    <LinkContainer to='/account'>
                        <Nav.Link>Account</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
