import React from 'react';
import { Button } from 'react-bootstrap';

import google from '../images/social logo/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
                <h6 className='px-3'>or</h6>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
            </div>
            <div className='text-center mt-3'>
                <Button className='btn btn-dark'>
                    <img className='me-2' width={30} height={30} src={google} alt="" />
                    Google Login
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;