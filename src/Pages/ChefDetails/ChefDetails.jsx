import React, { useEffect, useState, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { LoadingToast, DismissToast } from '../../Layout/Main';
import RecipesBanner from '../Sheared/RecipesBanner/RecipesBanner';
import SingleRecipes from '../SingleRecipes/SingleRecipes';
import { Toaster } from 'react-hot-toast';

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const { id } = useParams();
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        LoadingToast('data')
        fetch(`https://the-china-kitchen-aalnoman10.vercel.app/${id}`)
            .then(res => res.json())
            .then(data => {
                setChefs(data)
                setRecipes(data.recipes)
            })
        DismissToast()
    }, []);

    return (
        <Container>
            <Toaster />
            <RecipesBanner chefs={chefs}></RecipesBanner>
            <Container>
                <h3 className="text-center pt-5 pb-3">Some Recipes</h3>
                <Row className='g-4 py-3 pb-5' xs={1} md={3}>
                    {recipes.map(recipe => <SingleRecipes
                        key={recipe.id}
                        recipe={recipe}
                    ></SingleRecipes>)}
                </Row>
            </Container>
        </Container>
    );
};

export default Recipes;