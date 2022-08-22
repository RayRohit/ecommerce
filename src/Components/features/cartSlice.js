import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bag: [],
    count: 0,
    total: 0,
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        Addtocart(state, action) {
            const newItem = state.bag.find((item) => item.id === action.payload.id)
            if (newItem === undefined) {
                const myItem = { ...action.payload, quantity: 1, subTotal: action.payload.price }
                state.bag.push(myItem)
                state.count++
                state.total += myItem.price
            }
            else {
                state.count++
                newItem.quantity++
                newItem.subTotal += newItem.price
                state.total += newItem.price
            }

        },
        Removefromcart(state, action) {
            const newItem = state.bag.find((item) => item.id === action.payload.id)
            if (newItem === undefined) {
                const myItem = { ...action.payload, quantity: 1 }
                state.bag.push(myItem)
                state.count--
                newItem.subTotal -= newItem.price
                state.total -= myItem.price
            }
            else {
                state.count--
                newItem.quantity--
                state.total -= newItem.price
            }
        },
        emptyCart(state) {
            state.bag = []
            window.location.reload()
        },
        removeItem(state, action) {
            state.bag = [...action.payload[0]]
            state.count -= action.payload[1].quantity
            state.total -= action.payload[1].subTotal
        }
    },

})
export const cartActions = cartSlice.actions