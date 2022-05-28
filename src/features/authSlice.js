import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: localStorage.getItem("lattice-token") === null ? false : true,
    authToken: localStorage.getItem("lattice-token") ?? null,
    user: JSON.parse(localStorage.getItem("lattice-user") ?? null),
}

export const userLogin = createAsyncThunk('authentication/userLogin', async ({ username, password }) => {
    try {
        console.log("LOG ARGS: ", username, password)
        const res = await axios({
            method: "POST",
            url: "/api/auth/login",
            data: {
                username, password
            }
        })
        return res.data
    } catch (error) {
        console.error(error)
    }
})
export const userSignup = createAsyncThunk('authentication/userSignup', async ({ username, password, firstName }) => {
    try {
        const res = await axios({
            method: 'POST',
            url: "/api/auth/signup",
            data: {
                username: username,
                password: password,
                firstName: firstName,
            }
        })
        localStorage.setItem("lattice-token", res.data.encodedToken);
        localStorage.setItem("lattice-user", JSON.stringify(res.data.createdUser));
        return res.data;
    } catch (error) {
        console.error(error)
    }
})


const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        userLogout: (state) => {
            localStorage.removeItem("lattice-token");
            localStorage.removeItem("lattice-user");
            state.isAuth = false;
            state.user = null;
            state.authToken = null;
        }
    },
    extraReducers: {
        [userSignup.fulfilled]: (state, action) => {
            state.isAuth = true;
            state.authToken = action.payload.encodedToken;
            state.user = action.payload.createdUser;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.isAuth = true;
            state.authToken = action.payload.encodedToken;
            state.user = action.payload.foundUser;
        }
    }
})
export const { userLogout } = authSlice.actions;
export default authSlice.reducer