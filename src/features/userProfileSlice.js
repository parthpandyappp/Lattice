import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfileLoading: false,
    userPostsLoading: false,
    userProfile: {},
    userPosts: {},
}

export const getUserProfile = createAsyncThunk("userProfile/getUserProfile", async ({ authToken, username }) => {
    try {
        const res = await axios({
            method: "GET",
            url: `/api/users/${username}`,
            headers: {
                authorization: authToken, // passing token as an authorization header
            },
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
})


const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        profileUpdate : (state, action) => {
            state.userProfile.username = action.payload.username;
            state.userProfile.firstName = action.payload.firstName;
            state.userProfile.bio = action.payload.bio;
        }
    },
    extraReducers: {
        [getUserProfile.pending]: (state) => {
            state.userProfileLoading = false;
        },
        [getUserProfile.fulfilled]: (state, action) => {
            state.userProfileLoading = true;
            state.userProfile = action.payload.user
        },
    }

})

export const {profileUpdate} = userProfileSlice.actions; 


export default userProfileSlice.reducer;