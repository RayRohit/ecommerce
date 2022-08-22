import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoggedIn: false,
    loggedUser: [],
    error: ''
}
export const LogCheck = createAsyncThunk('login/LogCheck', (person) => {
    try {
        console.log(person)
        return axios.get(`http://localhost:3000/users/?email=${person.email}&&pass=${person.pass}`).then((res) => res.data).catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err)
    }
})
export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isLoggedIn = false
        }
    },
    extraReducers: {
        [LogCheck.pending]: (state) => {
            state.isLoggedIn = false
        },
        [LogCheck.fulfilled]: (state, actions) => {
            state.loggedUser = actions.payload
            state.isLoggedIn = true
        }
    }
})
export const AuthActions = AuthSlice.actions