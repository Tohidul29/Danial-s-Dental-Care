import React from 'react';
import Image from 'react-bootstrap/Image'
import image from '../images/me/Tohidul.JPG'

const About = () => {
    return (
        <div>
            <div className='text-center mt-4'>
                <Image roundedCircle src={image} width={300} height={300}></Image>
                <div className='mt-4 text-dark fs-5 w-75 mx-auto'><p >Hello, my name's <b>MD Tohidul Islam.</b> I am from Bangladesh. Recently, I have finished my bachelor study from Southwest Forestry University. From my University time, when I was in 3rd year, I was bit interested in Web development. One of my classmates inspired me a lot to continue. I have few goals to do. Currently, I learn React to make front-end application. My next goal is to learn express.js, mongoDB, next.js</p></div>
                
            </div>
        </div>
    );
};

export default About;