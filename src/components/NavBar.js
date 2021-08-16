import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import UserContext from '../userContext';

export default function NavBar() {
  const { user, unsetUser, setUser } = useContext(UserContext);

  function logout() {
    unsetUser();

    setUser({
      email: null,
      isAdmin: null,
    });
  }

  return (
    <Navbar sticky='top' bg='light' variant='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src='../../public/favicon4.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/products'>Products</Nav.Link>

          {user.email ? (
            user.isAdmin ? (
              <>
                <Nav.Link href='/addProduct'>Add Product</Nav.Link>
                <Nav.Link href='/orders'>Orders</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href='/cart'>Cart</Nav.Link>
                <Nav.Link href='/orders'>Orders</Nav.Link>
                <Nav.Link onClick={logout} href='/login'>
                  Logout
                </Nav.Link>
              </>
            )
          ) : (
            <>
              <Nav.Link href='/register'>Register</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
