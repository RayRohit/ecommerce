import { GroupAdd, ShoppingCart } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import logo from '../images/comfylogo.svg'
import './Nav.css'

export default function Navb() {
    return (
        <>
            <BrowserRouter>
                <Navbar expand='lg'>
                    <Container>
                        <Navbar.Brand>
                            <img src={logo} alt='site logo' width='200px' />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav className='mx-auto'>
                                <Nav.Link className='fs-5 px-lg-3'>Home</Nav.Link>
                                <Nav.Link className='fs-5 px-lg-3'>About</Nav.Link>
                                <Nav.Link className='fs-5 px-lg-3'>Products</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link>
                                    <Button variant="text" className='nav-btn' endIcon={<ShoppingCart />} >Text</Button>
                                </Nav.Link>
                                <Nav.Link>
                                    <Button variant="text" className='nav-btn' endIcon={<GroupAdd />} >Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </BrowserRouter>
        </>
    )
}
