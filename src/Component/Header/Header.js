import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Danial's Dental Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/checkout'>Checkout</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <Button className='btn btn-primary' onClick={handleLogout}>Logout</Button>
                                :
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;