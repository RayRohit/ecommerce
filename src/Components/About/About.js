import React from 'react'
import './About.css'
import image from '../../images/aboutimg.jpeg'

export default function About() {
    return (
        <>
            <div style={{ backgroundColor: '#eaded7' }}>
                <div className='container'>
                    <nav aria-label="breadcrumb" style={{ cursor: 'pointer' }}>
                        <ol className="breadcrumb p-5 fs-3 fw-bold">
                            <li className="breadcrumb-item"><a href="/" style={{ textDecoration: 'none', color: '#795744' }}>Home</a></li>
                            <li className="breadcrumb-item active" style={{ color: '#453227' }} aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className='container'>
                <div className='row p-5'>
                    <div className='col-sm-6'>
                        <img src={image} className='img-fluid about-logo' alt='about logo' width='100%' />
                    </div>
                    <div className='col-sm-6 ps-5'>
                        <h3 className='fw-bolder story'>Our Story</h3>
                        <p className='pt-5 lh-lg text-secondary' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                    </div>
                </div>
            </div>
            <footer style={{ backgroundColor: '#222',position:'absolute',bottom:0,width:'100%' }}>
                <h6 className='text-center text-light p-4'>© 2022 ComfySloth All rights reserved</h6>
            </footer>
        </>
    )
}
