import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    let userDetail;
    if (user) {
        console.log(user)
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
        </div>
    );
};

export default Checkout;