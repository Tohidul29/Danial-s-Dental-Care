import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    let errorMsg;

    if (error) {
        errorMsg = <div className='text-danger mt-2'>
            <p>Error: {error.message}</p>
        </div>
    }

    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const fullNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if(loading){
        return <Loading></Loading>
    }

    const handleRegister = event => {
        event.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(fullName, email, password);

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='mt-4 w-50 mx-auto'>
            <h2 className='text-center my-4 text-dark'>Danial's Dental Care Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control ref={fullNameRef} type="text" placeholder="Enter Full Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Register
                </Button>
                {
                    errorMsg
                }
            </Form>
            <div className='mt-3'>
                <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Login</Link> </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;