import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: localStorage.getItem("lattice-token") === null ? false : true,
    authToken: localStorage.getItem("lattice-token") ?? null,
    authUser: JSON.parse(localStorage.getItem("lattice-user")) ?? null,
    authUserLoading: JSON.parse(localStorage.getItem("authUserLoading")) ?? false,
}


export const userLogin = createAsyncThunk('authentication/userLogin', async ({ username, password }, thunkAPI) => {
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
        localStorage.setItem("authUserLoading", true)
        console.log()
        return res.data
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue("username or password is incorrect")
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
                plink: "",
            }
        })
        localStorage.setItem("lattice-token", res.data.encodedToken);
        localStorage.setItem("lattice-user", JSON.stringify(res.data.createdUser));
        localStorage.setItem("authUserLoading", true)
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
            localStorage.removeItem("authUserLoading");
            state.isAuth = false;
            state.authUser = null;
            state.authToken = null;
            state.authUserLoading = false;
        },
        editProfile: (state, action) => {
            state.authUser.username = action.payload.username;
            state.authUser.firstName = action.payload.firstName;
            state.authUser.bio = action.payload.bio;
            state.authUser.avatar = action.payload.avatar;
            state.authUser.plink = action.payload.plink;
            const user = JSON.parse(localStorage.getItem("lattice-user"))
            localStorage.setItem("lattice-user", JSON.stringify({ ...user, username: action.payload.username, firstName: action.payload.firstName, bio: action.payload.bio }))
        },
    },
    extraReducers: {
        [userSignup.pending]: (state) => {
            state.authUserLoading = false;
        },
        [userLogin.pending]: (state) => {
            state.authUserLoading = false;
        },
        [userSignup.fulfilled]: (state, action) => {
            state.isAuth = true;
            state.authToken = action.payload.encodedToken;
            state.authUser = action.payload.createdUser;
            state.authUserLoading = true;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.isAuth = true;
            state.authToken = action.payload.encodedToken;
            state.authUser = action.payload.foundUser;
            state.authUserLoading = true;

        }
    }
})
export const { userLogout, editProfile } = authSlice.actions;
const authReducer = authSlice.reducer
export { authReducer }