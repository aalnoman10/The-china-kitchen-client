import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { GrGoogle } from 'react-icons/Gr';
import { BsGithub } from 'react-icons/Bs';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Toaster } from 'react-hot-toast';
import { ErrorToast, SuccessToast } from '../../../Layout/Main';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const { loginWithEmailPassword, setUser, setError, loginWithPopup } = useContext(AuthContext)

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailPassword(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                navigate(from, { replace: true })
                SuccessToast('Login successful')
                form.reset()
            })
            .catch(error => {
                const errorMessage = error.message;
                ErrorToast(error.message)
                setError(errorMessage)
            })
    }

    const handleGoogleLogin = () => {
        loginWithPopup(providerGoogle)
            .then((res) => {
                const loggedUser = res.user;
                setUser(loggedUser)
                navigate(from, { replace: true })
                SuccessToast('Login successful')
            })
            .catch((error) => {
                setError(error.message)
                ErrorToast(error.message)
            })
    }

    const handleGithubLogin = () => {
        loginWithPopup(providerGithub)
            .then((res) => {
                const loggedUser = res.user;
                setUser(loggedUser)
                navigate(from, { replace: true })
                SuccessToast('Login successful')
            })
            .catch((error) => {
                setError(error.message)
                ErrorToast(error.message)
            })
    }

    return (
        <Container>
            <Toaster />
            <Container className='d-md-flex justify-content-around align-items-center bg-light p-5'>
                <div className='flex-1'>
                    <h1 className='pt-3 text-center text-md-start p-md-0'>The China Kitchen</h1>
                    <p className='pb-3 text-center text-md-start p-md-0'>Savor the flavors of our exquisite dishes. Experience culinary perfection.</p>
                </div>
                <div className="flex-1 bg-white p-3 border rounded" style={{ width: '360px' }}>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' placeholder="Email address" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary" className='w-100' type="submit">Login</Button>

                        <Form.Text className="text-primary text-center d-block">Forgotten password?</Form.Text>
                    </Form>
                    <hr />
                    <Link to='/resister' className='d-flex justify-content-center'><Button variant="success">Create new account</Button></Link>
                    <h5 className='pt-3 pb-1 text-center'>login with </h5>
                    <div className='px-5 d-flex justify-content-around'>
                        <GrGoogle size={24} onClick={handleGoogleLogin} title='login with Google' className='ms-5' />
                        <BsGithub size={24} onClick={handleGithubLogin} title='login with Github' className='me-5' />
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Login;