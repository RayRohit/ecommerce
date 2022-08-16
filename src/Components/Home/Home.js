import React from 'react'
import homepic3 from '../../images/homepic3.png'
import { Button } from 'react-bootstrap'
import './Home.css'
import f1 from '../../images/f1.jpg'
import f2 from '../../images/f2.jpg'
import f3 from '../../images/f3.jpg'
import { GiCompass, GiDiamondHard } from 'react-icons/gi'
import { MdHistoryEdu } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { useNavigate } from 'react-router-dom'




export default function Home() {
const navigate = useNavigate()
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
    const cardData = [
        {
            id: 11,
            icon: <IconContext.Provider value={{ size: '70px' }}><GiCompass className='border border-light rounded-circle' style={{ padding: '15px', backgroundColor: "#eaded7" }} /></IconContext.Provider>,
            title: 'Mission',
            des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
        },
        {
            id: 12,
            icon: <IconContext.Provider value={{ size: '70px' }}><GiDiamondHard className='border border-light rounded-circle' style={{ padding: '15px', backgroundColor: "#eaded7" }} /></IconContext.Provider>,
            title: 'Vision',
            des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
        },
        {
            id: 13,
            icon: <IconContext.Provider value={{ size: '70px' }}><MdHistoryEdu className='border border-light rounded-circle' style={{ padding: '15px', backgroundColor: "#eaded7" }} /></IconContext.Provider>,
            title: 'History',
            des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
        }
    ]
    return (
        <>
            <div className='container'>
                <div className='row' style={{ height: '91vh' }}>
                    <div className='col-sm-6 d-flex justify-content-center flex-column px-5 py-3'>
                        <p className='fs-1 text-left'>Design Your Comfort Zone</p>
                        <div className='fw-bold text-secondary lh-lg' style={{ textAlign: 'justify' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                        </div>
                        <div className='py-3'>
                            <Button className='btn border-0' style={{backgroundColor:'#ab7a5f'}} onClick={()=>navigate('/products')}>SHOP NOW</Button>
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
                                    <div className='card border-0 mx-auto' key={item.id} style={{ width: '18rem' }}>
                                        <div>
                                            <img src={item.image} alt={item.title} className='img-fluid rounded' width='100%' height='225px !important' />
                                        </div>
                                        <div className='d-flex justify-content-between' style={{ backgroundColor: '#f1f5f8' }}>
                                            <p className='py-2 '>{item.title}</p>
                                            <p className='py-2' style={{ color: '#ab7a5f' }}>{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='text-center py-5'>
                        <button className='btn px-4' onClick={()=>navigate('/products')} style={{ backgroundColor: '#ab7a5f', color: '#fff' }}>ALL Products</button>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#eaded7' }}>
                <div className='container'>
                    <div className='row p-5'>
                        <div className='col-sm-6'>
                            <h1>Custom Furniture <br />Built Only For You</h1>
                        </div>
                        <div className='col-sm-6 p-3'>
                            <p style={{ color: '#795744', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                        </div>
                        {
                            cardData.map((data) => {
                                return (
                                    <div className='col-md-6 col-lg-4 pt-5'>
                                        <div className='card border-0 p-4' key={data.id} style={{ backgroundColor: '#c5a491' }}>
                                            <div className='text-center'>
                                                {data.icon}
                                            </div>
                                            <h4 className='text-center py-3 fw-bolder' style={{ color: '#453227' }}>{data.title}</h4>
                                            <p style={{ color: '#5f4435' }} className='text-center'>{data.des}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff' }} className='pt-5 pb-2'>
                <div className='container pt-4'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <h2>Join our newsletter and get 20% off</h2>
                            <p className='py-3 text-secondary lh-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                        </div>
                        <div className='col-sm-6'>
                            <div className="input-group pt-4">
                                <input type="text" class="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn" style={{ backgroundColor: '#ab7a5f', color: 'white' }} type="button" id="button-addon2">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#222' }}>
                <h6 className='text-center text-light p-4'>© 2022 ComfySloth All rights reserved</h6>
            </div>
        </>
    )
}