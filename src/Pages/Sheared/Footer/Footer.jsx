import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, } from 'react-icons/fa';
import { ImTelegram } from 'react-icons/im';
import { BsFillSuitHeartFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <Container>
            <div className='p-4 bg-dark  mb-0 rounded-top'>
                <Row xs={1} md={3}>
                    <Col>
                        <Card className='h-100 bg-transparent text-light'>
                            <Card.Body>
                                <Card.Title>Customer Care</Card.Title>
                                <Card.Text>
                                    <small className='d-block pb-1'><Link className='text-light'> Help Center </Link></small>
                                    <small className='d-block pb-1'><Link className='text-light'> Blog </Link></small>
                                    <small className='d-block pb-1'><Link className='text-light'> Contact Us </Link></small>
                                    <small className='d-block pb-1'><Link className='text-light'> Terms & Conditions </Link></small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100 bg-transparent text-light'>
                            <Card.Body>
                                <Card.Title>The China Kitchen</Card.Title>
                                <Card.Text>
                                    <small className='d-block pb-1'><Link className='text-light'> About The China Kitchen </Link></small>
                                    <small className='d-block pb-1'><Link className='text-light'> Privacy Policy </Link></small>
                                    <small className='d-block pb-1'><Link className='text-light'> Our Career </Link></small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100 bg-transparent text-light'>
                            <Card.Body>
                                <Card.Title>Follow us</Card.Title>
                                <Card.Text>
                                    <FaFacebook size={24} className='m-2' />
                                    <FaTwitter size={24} className='m-2' />
                                    <ImTelegram size={24} className='m-2' />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <p className='text-center text-white-50 mb-0 pt-3'>&copy; Copyright by The China Kitchen with  <BsFillSuitHeartFill className='text-danger'/></p>
            </div>
        </Container >
    );
};

export default Footer;