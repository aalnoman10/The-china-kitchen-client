import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillDislike } from 'react-icons/ai';

const RecipesBanner = ({ chefs }) => {

    const { bio, imageUrl, likes, name, numberOfRecipes, yearsOfExperience } = chefs;

    return (
        <>
            <Card className='my-3'>
                <div className="p-5 pb-3">
                    <Card.Img variant="top" className='rounded' src={imageUrl} />
                </div>
                <Card.Body>
                    <Card.Title className='text-center '>{name}</Card.Title>
                    <Card.Text>
                        {bio}
                    </Card.Text>
                </Card.Body>
                <ul>
                    <li className='mb-0 '>Years of experience : {yearsOfExperience}</li>
                    <li className='mb-0 '>Numbers of recipes : {numberOfRecipes}</li>
                </ul>
                <Card.Footer className='bg-transparent '>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className='pe-2'><AiFillDislike size={20} /></span><span>{likes}</span>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </>
    );
};

export default RecipesBanner;