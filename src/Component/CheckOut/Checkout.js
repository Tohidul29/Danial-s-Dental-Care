import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

const Checkout = () => {    
    const handleConfirm = () => {
        toast(`Thanks for your confirmation. I will contact with you soon via Email.`);
    }

    const [user] = useAuthState(auth);
    let userDetail;
    if (user) {
        userDetail = <div className='mt-5'>
            <img className='rounded-circle my-4' src={user.photoURL} alt="" /> <br />
            <h4>Email: {user.email}</h4>
        </div>
    }
    return (
        <div>
            <h2 className='text-center my-4'>Thanks for choosing Danial's Dental Care</h2>
            <div className='text-center'>
                {userDetail}
            </div>
            <ToastContainer></ToastContainer>
            <div className='my-5 text-center'>
                <Button className='btn btn-dark' type='submit' onClick={handleConfirm}>Confirm your appointment</Button>
            </div>
        </div>
    );
};

export default Checkout;