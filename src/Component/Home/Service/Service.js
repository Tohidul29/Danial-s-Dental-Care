import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { img, name, price, description } = service;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4 text-center mx-auto'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} width={100} height={200} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title className='my-3'>Cost: ${price}</Card.Title>
                    <Button variant="primary">Book Appointment</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;