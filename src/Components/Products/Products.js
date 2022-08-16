import React, { useEffect, useState } from 'react'
import './Products.css'
import {ImSearch} from 'react-icons/im'

export default function Products() {
    const [data,setData] = useState([])
    useEffect(()=>{
        try{
            fetch('https://course-api.com/react-store-products')
            .then((res)=>res.json())
            .then((data)=>{
                setData(data)
            })
        }
        catch(err){
            console.log(err)
        }
    },[])
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
                            <a href="#" className="border-0 list-group-item list-group-item-action">All</a>
                            <a href="#" className="border-0 list-group-item list-group-item-action list-group-item-light">Office</a>
                            <a href="#" className="border-0 list-group-item list-group-item-action list-group-item-light">Living Room</a>
                            <a href="#" className="border-0 list-group-item list-group-item-action list-group-item-light">Kitchen</a>
                            <a href="#" className="border-0 list-group-item list-group-item-action list-group-item-light">Bedroom</a>
                            <a href="#" className="border-0 list-group-item list-group-item-action list-group-item-light">Dining</a>
                            <a href="#" className="border-0 list-group-item list-group-item-action list-group-item-light">Kids</a>
                        </div>
                    </div>
                    <div className='col-sm-9'>
                        <div className='container-fluid'>
                            <div className='row'>
                                {
                                    data.map((item)=>{
                                        return(
                                            <div className='col-lg-4 col-md-6'>
                                                <div className='card border-0 my-2' key={item.id}>
                                                    <div className='img-container'>
                                                        <img src={item.image} alt={item.name} width='100%' className='img-fluid product-img' />
                                                        <div className='middle'>
                                                            <div className='text'><ImSearch /></div>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <h6 className='text-capitalize py-2 fw-normal'>{item.name}</h6>
                                                        <h6 className='fw-normal py-2'>$ {item.price}</h6>
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
