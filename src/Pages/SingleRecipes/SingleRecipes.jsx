import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import { SuccessToast } from '../../Layout/Main';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const SingleRecipes = ({ recipe }) => {
    const { name, description, ingredients, rating, image } = recipe
    const [more, setMore] = useState()

    const handleFavorite = (e) => {
        e.target.setAttribute("disabled", "disabled")
        SuccessToast("your Favorite")
    }

    // console.log(more);
    return (
        <Col>
            <Toaster />
            <Card className='h-100'>
                <div className="p-3">
                    <Card.Img className="text-center" src={image} />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text className='text-secondary'>{
                        !more ?
                            description.length > 100 ?
                                <>{description.slice(0, 120)}... <Button onClick={() => setMore(!more)} variant='warning'>Read More</Button> </>
                                :
                                description
                            :
                            <>{description}<Button onClick={() => setMore(!more)} variant='warning'>Sow Less</Button> </>}
                    </Card.Text>
                    <div>
                        <h5 className='text-decoration-underline'>ingredients: </h5>
                        <ul>
                            {ingredients.map((ingredient_item, index) => <li key={index}>{ingredient_item}</li>)}
                        </ul>
                    </div>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Rating className='pe-3'
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<AiOutlineStar size={20} />}
                            placeholderSymbol={<AiFillStar className='text-warning' size={20} />}
                            fullSymbol={<AiFillStar size={20} />}
                        />
                        <span>{rating}</span>
                    </div>
                    <Button onClick={handleFavorite} variant='primary'>Favorite</Button>
                </Card.Footer>
            </Card>
        </Col >
    );
};

export default SingleRecipes;