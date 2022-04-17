import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateHome = event =>{
        navigate('/home');
    }
    const navigateRegister = event => {
        navigate('/register');
    }

    if (user) {
        navigateHome('/home');
    }

    let errorMsg;

    if (error) {
        errorMsg =
            <div className='text-danger mt-2'>
                <p>Error: {error.message}</p>
            </div>
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

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

                <Button variant="dark" type="submit">
                    Login
                </Button>
                {
                    errorMsg
                }
            </Form>
            <div className='mt-3'>
                <p>New to Danial's Dental Care? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Register</Link> </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;