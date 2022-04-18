import React, { useEffect, useState } from 'react';
import Feedback from './Feedback/Feedback';

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('feedback.json')
            .then(response => response.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <div>
            <h2 className='text-center mt-5'>Feedback About Dr. Danial Khan</h2>
            <div className='row container mx-auto my-5'>
                {
                    feedbacks.map(feedback => <Feedback
                        key={feedback.id}
                        feedback={feedback}
                    >
                    </Feedback>)
                }
            </div>
        </div>
    );
};

export default Feedbacks;