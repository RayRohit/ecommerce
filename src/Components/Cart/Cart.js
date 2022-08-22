import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Cart.css'
import { Delete } from '@mui/icons-material'
import { cartSlice } from '../features/cartSlice'

export default function Cart() {
    const { total ,count} = useSelector((state) => state.cart)
    const {isLoggedIn} = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { bag } = useSelector((state) => state.cart)
    const [ship, setShip] = useState(0)
    useEffect(() => {
        count < 10 ? setShip(20) : setShip(0)
    }, [count])
    return (
        <>
            <div className='container-fluid'>
                {bag.length === 0 ?
                    <>
                        <div className='text-center pt-4'>
                            <h2>Your Cart Is Empty</h2>
                        </div>
                        <div className='text-center py-3'>
                            <button className='btn' style={{ backgroundColor: '#ab7a5f', color: 'white' }} onClick={() => navigate('/products')}>Fill it</button>
                        </div>
                    </>
                    :
                    <>
                        <nav aria-label="breadcrumb" style={{ cursor: 'pointer' }}>
                            <ol className="breadcrumb p-5 justify-content-center fs-3 fw-bold" style={{ backgroundColor: '#eaded7' }}>
                                <li className="breadcrumb-item"><p onClick={() => navigate('/')} style={{ textDecoration: 'none', color: '#795744' }}>Home</p></li>
                                <li className="breadcrumb-item active" style={{ color: '#453227' }} aria-current="page">Cart</li>
                            </ol>
                        </nav>
                        <div className='container'>
                            <div className='py-4 table-responsive-sm'>
                                <table className='table text-center'>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>Item</th>
                                            <th>Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>SubTotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bag.map((item) => {
                                                return (

                                                    <tr key={item.id}>
                                                        <td>
                                                            <img src={item.image} className='img-fluid rounded' width='200px' />
                                                        </td>
                                                        <td className='text-capitalize fw-bold'>{item.name}</td>
                                                        <td className='text-capitalize fw-bold'><span className='btn btn-white fw-bolder fs-5 px-3' onClick={() => {
                                                            if(item.qunatity>1){
                                                                item.quantity > 1 && dispatch(cartSlice.actions.Removefromcart(item))
                                                            }
                                                        }}>-</span>{item.quantity}<span className='btn btn-white fw-bolder fs-5 px-3' onClick={() => dispatch(cartSlice.actions.Addtocart(item))}>+</span></td>
                                                        <td className='text-capitalize fw-bold'>{parseFloat(item.price)}</td>
                                                        <td className='text-capitalize fw-bold'>$ {parseFloat(item.subTotal)}</td>
                                                        <td>
                                                            <IconButton color='secondary' aria-label="delete" onClick={() => {
                                                                let newBag = [...bag]
                                                                console.log(newBag.indexOf(item))
                                                                const deletedItem = newBag.splice(newBag.indexOf(item), 1)
                                                                dispatch(cartSlice.actions.removeItem([newBag, deletedItem[0]]))


                                                            }}>
                                                                <Delete />
                                                            </IconButton>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <div>
                                    <button className='btn text-white' style={{ backgroundColor: '#ab7a5f' }} onClick={() => navigate('/products')}>Continue Shopping</button>
                                    <button className='float-end btn btn-dark' onClick={() => dispatch(cartSlice.actions.emptyCart())}>Clear Shopping Cart</button>
                                </div>
                            </div>
                            <div className='py-5 d-flex flex-column align-items-end'>
                                <div className='border border-1 w-25 p-5'>
                                    <h6>Subtotal :  <span className='float-end'>$ {total}</span> </h6>
                                    <h6 className='py-3'>Shipping Fee : <span className='float-end'>$ {ship}</span> </h6>
                                    <hr style={{ height: '2px' }} />
                                    <h4 className='fw-bolder'>Order Total : <span className='float-end'>$ {parseFloat(total + ship)}</span> </h4>
                                </div>
                                <div className='py-3 w-25'>
                                        {
                                            isLoggedIn 
                                            ?
                                    <button className='btn w-100 text-white' style={{ backgroundColor: '#ab7a5f' }} >Proceed To CheckOut</button>
                                            :
                                    <button className='btn w-100 text-white' style={{ backgroundColor: '#ab7a5f' }} onClick={()=>navigate('/login')}>Login</button>

                                        }
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
