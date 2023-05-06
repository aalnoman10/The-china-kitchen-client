import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container style={{ height: "90vh" }} className='d-block d-md-flex justify-content-between align-items-center py-4  g-3'>
            <div className='custom-flex-1 py-3 py-md-0'>Welcome to <i className='fw-semibold'>The China Kitchen</i> ! We offer authentic Chinese cuisine made using fresh ingredients and traditional cooking techniques. Our menu includes classic favorites and new dishes, with options for vegetarians and those with dietary restrictions. Our friendly service and welcoming atmosphere make for an unforgettable dining experience. Join us today! </div >
            <div className='custom-flex-1 d-flex justify-content-center align-items-center py-3 py-md-0'>
                <img className='custom-banner-img' src="https://i.ibb.co/Wf7nncY/image.png" alt="image" border="0" />
            </div>
        </Container>
    );
};

export default Banner;