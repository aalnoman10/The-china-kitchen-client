import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AiFillDislike } from "react-icons/ai";

const SingleChefs = ({ chef }) => {
    const { id, bio, imageUrl, likes, name, numberOfRecipes, recipes, yearsOfExperience } = chef;

    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {bio.length > 100 ? <>{bio.slice(0, 101)}...</> : bio}
                    </Card.Text>
                </Card.Body>
                <p className="d-flex justify-content-between algin-center px-3">
                    <span className='mb-0 d-inline'>Years of experience : {yearsOfExperience}</span>
                    <span className='mb-0 d-inline'>Numbers of recipes : {numberOfRecipes}</span>
                </p>
                <Card.Footer className='bg-transparent '>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className='pe-2'><AiFillDislike size={20} /></span><span>{likes}</span>
                        </div>
                        <Link to={`/recipe/${id}`}><Button variant="info">View Recipes</Button></Link>
                    </div>
                </Card.Footer>
            </Card>
        </Col >
    );
};

export default SingleChefs;