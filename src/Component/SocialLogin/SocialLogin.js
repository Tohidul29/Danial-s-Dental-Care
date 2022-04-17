import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import google from '../images/social logo/google.png'

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

    let errorMsg;

    if (error) {
        errorMsg = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
                <h6 className='px-3'>or</h6>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
            </div>
            {errorMsg}
            <div className='text-center mt-3'>
                <Button onClick={() => signInWithGoogle()} className='btn btn-dark'>
                    <img className='me-2' width={30} height={30} src={google} alt="" />
                    Google Login
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;