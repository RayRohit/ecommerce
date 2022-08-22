import { GroupAdd, Logout, ShoppingCart } from '@mui/icons-material'
import { Badge, Button } from '@mui/material'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/comfylogo.svg'
import { AuthSlice } from './features/AuthSlice'
import './Nav.css'

export default function Navb() {
    const { isLoggedIn } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { count } = useSelector((state) => state.cart)
    return (
        <>
            <Navbar expand='lg'>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt='site logo' width='200px' />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className='mx-auto'>
                            <Nav.Link as={Link} to='/' className='fs-5 px-lg-3 navbar-link'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about' className='fs-5 px-lg-3 navbar-link'>About</Nav.Link>
                            <Nav.Link as={Link} to='/products' className='fs-5 px-lg-3 navbar-link'>Products</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <Badge badgeContent={count} color="primary">
                                    {/* <ShoppingCart color="action" /> */}
                                    <Button variant="text" className='nav-btn' endIcon={<ShoppingCart />} onClick={() => navigate('/cart')}>Cart</Button>
                                </Badge>
                            </Nav.Link>
                            <Nav.Link>
                                {
                                    isLoggedIn
                                        ?
                                        <Button variant="text" className='nav-btn' endIcon={<Logout />} onClick={() => dispatch(AuthSlice.actions.logout())}>Logout</Button>
                                        :
                                        <Button variant="text" className='nav-btn' endIcon={<GroupAdd />} onClick={() => navigate('/login', { replace: true })}>Login</Button>

                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
