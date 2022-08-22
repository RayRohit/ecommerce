import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { cartSlice } from '../features/cartSlice'
import './CartItems.css'
export default function CartItem() {
    const param = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState([])
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
    const { count, bag } = useSelector((state) => state.cart)
    return (
        <>
            <div className='container-fluid'>
                {
                    data.map((item) => {

                        let number = item.price
                        number = number.toString().split('')
                        number.splice(number.length - 2, 0, '.')
                        number = parseFloat(number.join(''))

                        item = {...item,price:number}

                        let qts

                        if (item.id === param.id) {
                            bag.forEach((item) => {
                                if (item.id === param.id) qts = item.quantity
                            })

                            return (
                                <div className='row' key={item.id}>
                                    <nav aria-label="breadcrumb" style={{ cursor: 'pointer', backgroundColor: '#eaded7' }}>
                                        <ol className="breadcrumb justify-content-center text-center p-5 fs-3 fw-bold">
                                            <li className="breadcrumb-item "><a href="/" style={{ textDecoration: 'none', color: '#795744' }} onClick={() => navigate('/')}>Home</a></li>
                                            <li className="breadcrumb-item " style={{ color: '#453227' }} aria-current="page" onClick={() => navigate('/products')}>Products</li>
                                            <li className="breadcrumb-item  active text-capitalize" style={{ color: '#453227' }} aria-current="page">{item.name}</li>

                                        </ol>
                                    </nav>
                                    <div className='col-sm-6 py-5' key={item.id}>
                                        <div className='d-flex justify-content-end py-5'>
                                            <img src={item.image} alt={item.name} className='img-fluid cart-img' />
                                        </div>
                                    </div>
                                    <div className='col-sm-6 py-5 '>
                                        <div className='p-5 ' style={{ textAlign: 'justify' }}>
                                            <h3 className='text-capitalize fw-bolder'>{item.name}</h3>
                                            <h5 className='fw-bolder py-2' style={{ color: '#ab7a5f' }}>$ {item.price}</h5>
                                            <p style={{ lineHeight: '2' }} className='py-2'>{item.description}</p>
                                            <h6 className='pt-3 pb-2'>Available &ensp;:&ensp; In Stock</h6>
                                            <h6 className='py-3'>SKU &ensp;:&ensp;{item.id}</h6>
                                            <h6 className='py-3 text-capitalize'>Brand &ensp;:&ensp;{item.company}</h6>
                                            <hr />
                                            <div>
                                                <button className='btn fw-bolder fs-2' onClick={() => dispatch(cartSlice.actions.Removefromcart(item))}>-</button>
                                                <button className='btn fw-bolder fs-2'>{qts !== undefined ? qts : 1}</button>
                                                <button className='btn fw-bolder fs-2' onClick={() => dispatch(cartSlice.actions.Addtocart(item))}>+</button>
                                            </div>
                                            <div>
                                                <button className='btn px-4' style={{ backgroundColor: '#ab7a5f', color: 'white' }} onClick={() => dispatch(cartSlice.actions.Addtocart(item))}>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}
