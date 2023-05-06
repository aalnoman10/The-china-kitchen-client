import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import Chefs from '../Chefs/Chefs';
import Servies from '../Servies/Servies';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Chefs></Chefs>
            <Servies></Servies>
            <Reviews></Reviews>
        </Container>
    );
};

export default Home;