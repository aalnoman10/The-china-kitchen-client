import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { Card, Col, Container, Row } from 'react-bootstrap';

const reviews = [
    {
        id: 1,
        author: 'John Doe',
        text: 'The food was amazing and the service was excellent. I highly recommend this restaurant!'
    },
    {
        id: 2,
        author: 'Jane Smith',
        text: 'The atmosphere was cozy and the staff was friendly. The only downside was the long wait time for our food.'
    },
    {
        id: 3,
        author: 'Mike Johnson',
        text: 'The portions were small for the price, but the quality of the food was top-notch.'
    }
];

const Reviews = () => {
    return (
        <Container className='py-3'>
            <h3 className='text-center'>Reviews</h3>
            <Row className='g-4 py-3 pb-5' xs={1} md={3}>
                {reviews.map(review => <Col key={review.id}>
                    <Card className='h-100'>
                        <div className="text-center pt-3">
                            <FaRegUser size={70} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center'>{review.author}</Card.Title>
                            <Card.Text className='text-secondary'>{review.text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>
        </Container>
    );
};

export default Reviews;