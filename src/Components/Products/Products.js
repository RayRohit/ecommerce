import React, { useEffect, useState } from 'react'
import './Products.css'
import { ImSearch } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

export default function Products() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [category, setCategory] = useState('all')
    useEffect(() => {
        try {
            fetch('https://course-api.com/react-store-products')
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                })
        }
        catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <>
            <div style={{ backgroundColor: '#eaded7' }}>
                <div className='container'>
                    <nav aria-label="breadcrumb" style={{ cursor: 'pointer' }}>
                        <ol className="breadcrumb p-5 fs-3 fw-bold">
                            <li className="breadcrumb-item"><a href="/" style={{ textDecoration: 'none', color: '#795744' }}>Home</a></li>
                            <li className="breadcrumb-item active" style={{ color: '#453227' }} aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3'>
                        <div>
                            <input type='search' className='form-control' placeholder='search' />
                        </div>
                        <h6 className='py-2 fw-bolder'>Category</h6>
                        <div className="list-group">
                            <h5 className="border-0 list-group-item list-group-item-action" onClick={() => setCategory('all')} >All</h5>
                            <h6 className="border-0 list-group-item list-group-item-action list-group-item-light" onClick={() => setCategory('office')} >Office</h6>
                            <h6 className="border-0 list-group-item list-group-item-action list-group-item-light" onClick={() => setCategory('living room')} >Living Room</h6>
                            <h6 className="border-0 list-group-item list-group-item-action list-group-item-light" onClick={() => setCategory("kitchen")} >Kitchen</h6>
                            <h6 className="border-0 list-group-item list-group-item-action list-group-item-light" onClick={() => setCategory('bedroom')} >Bedroom</h6>
                            <h6 className="border-0 list-group-item list-group-item-action list-group-item-light" onClick={() => setCategory('dining')} >Dining</h6>
                            <h6 className="border-0 list-group-item list-group-item-action list-group-item-light" onClick={() => setCategory('kids')} >Kids</h6>
                        </div>
                    </div>
                    <div className='col-sm-9'>
                        <div className='container-fluid'>
                            <div className='row'>
                                {
                                    data.map((item) => {
                                        let number = item.price
                                        number = number.toString().split('')
                                        number.splice(number.length - 2, 0, '.')
                                        number = parseFloat(number.join(''))

                                        if (category === 'all')
                                            return (
                                                <div className='col-lg-4 col-md-6'>
                                                    <div className='card border-0 my-2' key={item.id}>
                                                        <div className='img-container'>
                                                            <img src={item.image} alt={item.name} width='100%' className='img-fluid product-img' />
                                                            <div className='middle'>
                                                                <div className='text' onClick={() => { navigate(`/products/${item.id}`) }}><ImSearch /></div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <h6 className='text-capitalize py-2 fw-normal'>{item.name}</h6>
                                                            <h6 className='fw-normal py-2' style={{ color: '#ab7a5f' }}>$ {number}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        else
                                            if (item.category === category)
                                                return (
                                                    <div className='col-lg-4 col-md-6'>
                                                        <div className='card border-0 my-2' key={item.id}>
                                                            <div className='img-container'>
                                                                <img src={item.image} alt={item.name} width='100%' className='img-fluid product-img' />
                                                                <div className='middle'>
                                                                    <div className='text' onClick={() => { navigate(`/products/${item.id}`) }}><ImSearch /></div>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex justify-content-between'>
                                                                <h6 className='text-capitalize py-2 fw-normal'>{item.name}</h6>
                                                                <h6 className='fw-normal py-2' style={{ color: '#ab7a5f' }}>$ {number}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
