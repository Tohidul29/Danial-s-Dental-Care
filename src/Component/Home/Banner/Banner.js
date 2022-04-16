import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../images/banner/banner-1.jpg'
import banner2 from '../../images/banner/banner-2.jpg'
import banner3 from '../../images/banner/banner-3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Treatment with care</h3>
                    <p> I offer comprehensive and long term solutions to your dental concerns.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>10 years experience</h3>
                    <p>Eat and Smile with healthy confidence. Payment plan available. Weekend Appointments.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Quality full instruments</h3>
                    <p>I am using best and quality full instruments ever you seen.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;