import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center text-light bg-dark py-3' >
            <h6>Danial's Dental Care &copy; {year}</h6>
        </footer>
    );
};

export default Footer;