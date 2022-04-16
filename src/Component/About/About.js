import React from 'react';
import Image from 'react-bootstrap/Image'
import owner from '../images/me/Tohidul.JPG'

const About = () => {
    return (
        <div>
            <div className='text-center mt-4'>
                <Image roundedCircle src={owner} width={300} height={300}></Image>
                <div className='mt-4 text-dark fs-5 w-75 mx-auto'>
                    <p>Hello, my name's <b>MD Tohidul Islam.</b> I have a few goals to do. Currently, I learn React to make front-end applications, HTML, CSS, JavaScript, Bootstrap. My next goal is to learn express.js, MongoDB, next.js. I hope, I can finish it in next 3-4 months. That's my target.</p>
                </div>
            </div>
        </div>
    );
};

export default About;