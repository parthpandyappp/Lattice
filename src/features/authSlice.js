import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: localStorage.getItem("lattice-token") === null ? false : true,
    authToken: localStorage.getItem("lattice-token") ?? null,
    authUser: JSON.parse(localStorage.getItem("lattice-user")) ?? null
}

export const userLogin = createAsyncThunk('authentication/userLogin', async ({ username, password }) => {
    try {
        const res = await axios({
            method: "POST",
            url: "/api/auth/login",
            data: {
                username, password
            }
        })
        localStorage.setItem("lattice-token", res.data.encodedToken);
        localStorage.setItem("lattice-user", JSON.stringify(res.data.foundUser));
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
                avatar: "",
                bio: "",
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
            state.authUser = null; 
            state.authToken = null;
        },
        editProfile: (state, action) => {
            state.authUser.username = action.payload.username;
            state.authUser.firstName = action.payload.firstName;
            state.authUser.bio = action.payload.bio;
            const user = JSON.parse(localStorage.getItem("lattice-user"))
            localStorage.setItem("lattice-user", JSON.stringify({ ...user, username: action.payload.username, firstName: action.payload.firstName, bio: action.payload.bio }))
        },
    },
    extraReducers: {
        [userSignup.fulfilled]: (state, action) => {
            state.isAuth = true;
            state.authToken = action.payload.encodedToken;
            state.authUser = action.payload.createdUser;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.isAuth = true;
            state.authToken = action.payload.encodedToken;
            state.authUser = action.payload.foundUser;
        }
    }
})
export const { userLogout, editProfile } = authSlice.actions;
export default authSlice.reducer