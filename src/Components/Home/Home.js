import React from 'react'
import Navb from '../Navb'
import homepic3 from '../../images/homepic3.png'
import { Button } from 'react-bootstrap'
import './Home.css'
import f1 from '../../images/f1.jpg'
import f2 from '../../images/f2.jpg'
import f3 from '../../images/f3.jpg'


export default function Home() {
    const featuredData = [
        {
            id: 1,
            image: f1,
            title: 'Entertainment center',
            price: '$ 599.99'
        },
        {
            id: 2,
            image: f2,
            title: 'High-Back Bench',
            price: '$ 399.99'
        },
        {
            id: 3,
            image: f3,
            title: 'Modern Bookshelf',
            price: '$ 319.99'
        }
    ]
    return (
        <>
            <Navb />
            <div className='container'>
                <div className='row' style={{ height: '91vh' }}>
                    <div className='col-sm-6 d-flex justify-content-center flex-column px-5 py-3'>
                        <p className='fs-1 text-left'>Design Your Comfort Zone</p>
                        <div className='fw-bold text-secondary lh-lg' style={{ textAlign: 'justify' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                        </div>
                        <div className='py-3'>
                            <Button className='btn'>SHOP NOW</Button>
                        </div>
                    </div>
                    <div className='col-sm-6 py-3 d-none d-lg-block d-xl-block d-xxl-block d-md-block img-col'>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={homepic3} alt='home page' width='100%' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row pt-3' style={{ backgroundColor: '#f1f5f8' }}>
                    <h1 style={{ textDecoration: 'underline', textDecorationColor: '#ab7a5f', textUnderlineOffset: '8px' }} className='text-center py-5'>Featured Products</h1>
                    {
                        featuredData.map((item) => {
                            return (
                                <div className='col-sm-4 col-md-6 col-lg-4 my-1 pt-3'>
                                    <div className='card border-0 mx-auto' style={{ width: '18rem' }}>
                                        <div>
                                            <img src={item.image} alt={item.title} className='img-fluid rounded' width='100%' height='225px !important' />
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='py-2 '>{item.title}</p>
                                            <p className='py-2' style={{ color: '#ab7a5f' }}>{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='text-center py-5'>
                        <button className='btn px-4' style={{ backgroundColor: '#ab7a5f',color:'#fff' }}>ALL Products</button>
                    </div>
                </div>
            </div>
        </>
    )
}
