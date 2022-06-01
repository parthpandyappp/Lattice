import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}


export const getAllUsers = createAsyncThunk("userProfile/getAllUsers", async ({ authToken }) => {
    try {
        const res = await axios({
            method: "GET",
            url: "/api/users/",
            headers: {
                authorization: authToken, // passing token as an authorization header
            },
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload.users;
        },
    }

})


export default usersSlice.reducer;