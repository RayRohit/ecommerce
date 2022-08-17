import { Google, Twitter } from '@mui/icons-material'
import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Login.css'

export default function Signup() {
    const [person, setPerson] = useState({
        email: '',
        pass: ''
    })
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setPerson({ ...person, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(' http://localhost:3000/users',person).then((res)=>console.log(res.data)).catch((err)=>console.log(err))
    }

    console.log(person)
    return (
        <>
            <div className='container-fluid' style={{ height: '91vh', background: 'radial-gradient(#40404b, #111118) rgba(34,34,40,0.94)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <form className='border-0 shadow bg-light p-4 w-25 rounded' onSubmit={handleSubmit}>
                        <h5 className='text-center fw-bolder' style={{textShadow:'2px 2px 4px'}}>SIGNUP</h5>
                        <div className='py-2'>
                            <label htmlFor='email' className='fw-bold py-2'>Email</label>
                            <input type='email' name='email' id='email' className='form-control' value={person.email} onChange={handleChange} required />
                        </div>
                        <div className='py-2'>
                            <label htmlFor='pass' className='fw-bold py-2'>Password</label>
                            <input type='password' name='pass' id='pass' className='form-control' value={person.pass} onChange={handleChange} required />
                        </div>
                        <div className='pt-3 pb-1'>
                            <button className='btn btn-primary px-4 py-1'>Signup</button>
                        </div>
                        <div className='text-center py-2'>
                            <Button variant='contained' sx={{ backgroundColor: '#fff', color: 'black', fontWeight: 'bolder' }} className='google-btn' startIcon={<Google />}>Sign Up With Google</Button>
                        </div>
                        <div className='text-center py-2'>
                            <Button variant='contained' sx={{ backgroundColor: '#33b5e5', color: 'white', fontWeight: 'bolder' }} className='twitter-btn' startIcon={<Twitter />}>Sign Up With Twitter</Button>
                        </div>
                        <div className='text-end pt-3 fw-bold'>
                            <span>Already an user <a href='/login' className='text-decoration-none text-primary'>Login</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
