import React from 'react';
import { Card } from 'react-bootstrap';

const Feedback = ({feedback}) => {
    const {name, comment, img} = feedback;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4 text-center mx-auto'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} width={100} height={300} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Feedback;
