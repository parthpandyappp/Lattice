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

export const postFollowUser = createAsyncThunk("userProfile/postFollowUser", async ({ authToken, fuid }) => {
    try {
        const res = await axios({
            method: "POST",
            url: `/api/users/follow/${fuid}`,
            headers: {
                authorization: authToken, // passing token as an authorization header
            },
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
})

export const postUnFollowUser = createAsyncThunk("userProfile/postFollowUser", async ({ authToken, fuid }) => {
    try {
        const res = await axios({
            method: "POST",
            url: `/api/users/unfollow/${fuid}`,
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
        profileUpdate: (state, action) => {
            state.userProfile.username = action.payload.username;
            state.userProfile.firstName = action.payload.firstName;
            state.userProfile.bio = action.payload.bio;
            state.userProfile.avatar = action.payload.avatar;
            state.userProfile.plink = action.payload.plink;
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
        [postFollowUser.pending]: (state) => {
            state.userProfileLoading = false;
        },
        [postFollowUser.fulfilled]: (state, action) => {
            state.userProfile = action.payload.user;
            state.userProfileLoading = true;
        },
        [postUnFollowUser.pending]: (state) => {
            state.userProfileLoading = false;
        },
        [postUnFollowUser.fulfilled]: (state, action) => {
            state.userProfile = action.payload.user;
            state.userProfileLoading = true;
        }
    }

})



export const { profileUpdate } = userProfileSlice.actions;

const userProfileReducer = userProfileSlice.reducer
export { userProfileReducer };