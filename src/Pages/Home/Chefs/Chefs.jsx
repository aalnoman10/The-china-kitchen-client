import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import SingleChefs from '../SingleChefs/SingleChefs';
import { Toaster } from 'react-hot-toast';
import { DismissToast, LoadingToast } from '../../../Layout/Main';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        LoadingToast("recipe")
        fetch('https://the-china-kitchen-aalnoman10.vercel.app/')
            .then(res => res.json())
            .then(data => setChefs(data))
        DismissToast()
    }, [])

    return (
        <Container className='py-5 py-md-0'>
            <Toaster />
            <h3 className="text-center py-3 pt-5">Our Chef</h3>
            <Row className='g-4 py-3 pb-5' xs={1} md={3}>
                {chefs.map(chef => <SingleChefs
                    key={chef.id}
                    chef={chef}
                ></SingleChefs>)}
            </Row>
        </Container >
    );
};

export default Chefs;