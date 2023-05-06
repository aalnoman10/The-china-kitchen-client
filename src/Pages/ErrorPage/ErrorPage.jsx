import React from 'react';
import { Container } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='text-center'>
                <img src="https://i.ibb.co/5nDLjk0/image.png" alt="404 error" border="0" />
                <h1 className=' mt-3'>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </Container>
    );
};

export default ErrorPage;