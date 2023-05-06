import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlineFastfood } from 'react-icons/md';
import { GiVacuumCleaner } from 'react-icons/gi';
import { TbFriends } from 'react-icons/tb';

const Servies = () => {
    return (
        <Container>
            <h3 className="text-center">Our Services</h3>
            <Row className='g-4 py-3 pb-5' xs={1} md={4}>
                <Col>
                    <Card className='h-100'>
                        <div className="text-center pt-3">
                            <TbFriends size={70} className='text-warning' />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center'>Friendly and attentive staff</Card.Title>
                            <Card.Text className='text-secondary'>
                                The staff should be welcoming, polite, and attentive to the needs of customers. They should be knowledgeable about the menu and able to provide recommendations if asked.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col><Col>
                    <Card className='h-100'>
                        <div className="text-center pt-3">
                            <AiOutlineClockCircle size={70} className='text-warning' />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center'>Timely service</Card.Title>
                            <Card.Text className='text-secondary'>
                                Customers expect prompt and efficient service, whether it's taking orders, delivering food, or bringing the bill. The staff should be well-organized and able to manage the timing of the service to ensure customers are not kept waiting too long.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col><Col>
                    <Card className='h-100'>
                        <div className="text-center pt-3">
                            <MdOutlineFastfood size={70} className='text-warning' />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center'>Quality food:</Card.Title>
                            <Card.Text className='text-secondary'>
                                High-quality food is essential to a great restaurant experience. The food should be well-prepared, fresh, and flavorful. The kitchen staff should be skilled in preparing the dishes on the menu.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col><Col>
                    <Card className='h-100'>
                        <div className="text-center pt-3">
                            <GiVacuumCleaner size={70} className='text-warning' />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center'>Clean and comfortable environment</Card.Title>
                            <Card.Text className='text-secondary'>
                                A clean and comfortable environment is important for customers to enjoy their dining experience. The restaurant should be well-maintained, with clean table settings, comfortable seating, and a pleasant atmosphere.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Servies;