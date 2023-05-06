import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';

const Blog = () => {

    const handlePDF = () => {

    }

    return (
        <Container>
            <h1 className="text-center py-4">Some Important Question</h1>
            <Row md={2} xs={1} className='g-5 pb-5'>
                <Col>
                    <Card className='h-100'>
                        <Card.Body>
                            <Card.Title>Tell us the differences between uncontrolled and controlled components.</Card.Title>
                            <br />
                            <Card.Text>
                                Uncontrolled components rely on the DOM to control form data, while controlled components rely on React state to control form data.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between align-center p-3">
                            <h6>React To PDF</h6>
                            <FaFilePdf onClick={handlePDF} size={25} />
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100'>
                        <Card.Body>
                            <Card.Title>How to validate React props using PropTypes</Card.Title>
                            <br />
                            <Card.Text>
                                Using props can be used to prove when using React properties. The PropTypes library is used to validate the type of props.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between align-center p-3">
                            <h6>React To PDF</h6>
                            <FaFilePdf onClick={handlePDF} size={25} />
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100'>
                        <Card.Body>
                            <Card.Title>Tell us the difference between nodejs and express</Card.Title>
                            <br />
                            <Card.Text>
                                Node.js is a free, open-source, cross-platform JavaScript runtime environment for building server-side applications.Express is a popular, minimalist web framework for Node.js that simplifies the process of building web applications.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between align-center p-3">
                            <h6>React To PDF</h6>
                            <FaFilePdf onClick={handlePDF} size={25} />
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100'>
                        <Card.Body>
                            <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
                            <br />
                            <Card.Text>
                                A custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between align-center p-3">
                            <h6>React To PDF</h6>
                            <FaFilePdf onClick={handlePDF} size={25} />
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;
