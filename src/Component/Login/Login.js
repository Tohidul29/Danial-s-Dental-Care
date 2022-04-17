import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleLogin = event => {
        event.preventDefault();
    }

    const navigate = useNavigate();
    const navigateRegister = navigate('/register');

    return (
        <div className='mt-4 w-50 mx-auto'>
            <h2 className='text-center my-4 text-dark'>Danial's Dental Care Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
            <div className='mt-3'>
                <p>New to Danial's Dental Care? <Link to='/register' className='text-primary' onClick={navigateRegister}>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;