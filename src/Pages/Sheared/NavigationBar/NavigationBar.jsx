import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { ErrorToast, SuccessToast } from '../../../Layout/Main';

const NavigationBar = () => {

    const { user, setUser, setError, loginOut } = useContext(AuthContext)

    const handleLoginOut = () => {
        loginOut()
            .then(() => {
                setUser(null)
                SuccessToast('Log out successfully')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                ErrorToast(errorMessage)
            })
    }

    return (
        <Container >
            <Toaster />
            <Navbar bg="secondary" expand="md">
                <Container fluid>
                    <Navbar.Brand className='text-white fw-bold fw-i'>The China Kitchen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        ><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "bg-primary text-white px-2 text-decoration-none fw-semibold" : "text-white px-2 text-decoration-none fw-semibold"
                            }
                        >
                                Home
                            </NavLink>
                            <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "bg-primary text-white px-2 text-decoration-none fw-semibold" : "text-white px-2 text-decoration-none fw-semibold"
                            }
                            >
                                Blog
                            </NavLink>
                        </Nav>
                        {user ?
                            <>
                                <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} title={user?.displayName} src={user?.photoURL} alt="" />
                                <Button variant="dark" className='ms-3' onClick={handleLoginOut}>Log out</Button>
                            </>
                            :
                            <Link to='/login'><Button variant="dark">Login</Button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;