import React from 'react';
import image from '../images/404 not found/notfound.jpg'

const NotFound = () => {
    return (
        <div className='text-center w-100 mt-5'>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;