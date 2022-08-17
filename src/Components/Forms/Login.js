import { Google, Twitter } from '@mui/icons-material'
import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Login.css'

export default function Login() {
    const [person, setPerson] = useState({
        email: '',
        pass: ''
    })
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setPerson({ ...person, [name]: value })
    }
 

    console.log(person)
    return (
        <>
            <div className='container-fluid' style={{ height: '91vh', background: 'radial-gradient(#40404b, #111118) rgba(34,34,40,0.94)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <form className='border-0 shadow bg-light p-4 rounded w-25' >
                        <h5 className='text-center fw-bolder'>Authentication</h5>
                        <div className='py-2'>
                            <label htmlFor='email' className='fw-bold py-2'>Email</label>
                            <input type='email' name='email' id='email' className='form-control' value={person.email} onChange={handleChange} required />
                        </div>
                        <div className='py-2'>
                            <label htmlFor='pass' className='fw-bold py-2'>Password</label>
                            <input type='password' name='pass' id='pass' className='form-control' value={person.pass} onChange={handleChange} required />
                        </div>
                        <div className='py-3'>
                            <button className='btn btn-primary px-4 py-1'>Login</button>
                        </div>
                        <div className='text-center py-2'>
                            <Button variant='contained' sx={{ backgroundColor: '#fff', color: 'black', fontWeight: 'bolder' }} className='google-btn' startIcon={<Google />}>SignIn With Google</Button>
                        </div>
                        <div className='text-center py-2'>
                            <Button variant='contained' sx={{ backgroundColor: '#33b5e5', color: 'white', fontWeight: 'bolder' }} className='twitter-btn' startIcon={<Twitter />}>SignIn With Twitter</Button>
                        </div>
                        <div className='text-end pt-3 fw-bold'>
                            <span>Not an User <a href='/signup' className='text-decoration-none text-primary'>SIGNUP</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
