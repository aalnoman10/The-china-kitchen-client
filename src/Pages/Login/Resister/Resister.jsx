import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ErrorToast, SuccessToast } from '../../../Layout/Main';
import { Toaster } from 'react-hot-toast';

const Resister = () => {

    const navigate = useNavigate()
    const { createUser, setUser } = useContext(AuthContext)

    const handleResister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            return ErrorToast('password must br 6 character and lather')
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                navigate('/')

                updateProfile(loggedUser, {
                    displayName: name, photoURL: photoURL
                })
                    .then(() => {
                        SuccessToast('Login successful && update profile')
                    })
                    .catch((error) => {
                        ErrorToast(error.message)
                    });
                form.reset()
            })
            .catch(error => {
                const errorMessage = error.message;
                ErrorToast(error.message)
            })

    }

    return (
        <Container>
            <Toaster></Toaster>
            <Container className='d-md-flex justify-content-around align-items-center bg-light p-5'>
                <div className='flex-1'>
                    <h1 className='pt-3 text-center text-md-start p-md-0'>The China Kitchen</h1>
                    <p className='pb-3 text-center text-md-start p-md-0'>Savor the flavors of our exquisite dishes. Experience culinary perfection.</p>
                </div>
                <div className="flex-1 bg-white p-3 border rounded" style={{ width: '360px' }}>
                    <Form onSubmit={handleResister}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name='name' placeholder="Your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" name='photoURL' placeholder="Images URL" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' placeholder="Email address" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" name='accept' label="Terms & Conditions" required />
                        </Form.Group>

                        <Button variant="primary" className='w-100' type="submit">Resister</Button>

                        <Form.Text title='Press the Login button' className="text-primary text-center d-block">Already have an account !</Form.Text>
                    </Form>
                    <hr />
                    <Link to='/login' className='d-flex justify-content-center'><Button variant="success">Login</Button></Link>
                </div>
            </Container>
        </Container>
    );
};

export default Resister;