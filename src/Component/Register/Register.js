import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const navigate = useNavigate();
    const navigateLogin = navigate('/login');

    return (
        <div className='mt-4 w-50 mx-auto'>
            <h2 className='text-center my-4 text-dark'>Danial's Dental Care Register</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Register
                </Button>
            </Form>
            <div className='mt-3'>
                <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>login</Link> </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;