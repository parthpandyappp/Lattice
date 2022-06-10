import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    bookMarks: [],
    bookMarksLoading: false,
}

export const addToBookmarks = createAsyncThunk("posts/addToBookmarks", async ({ authToken, postId }) => {
    try {
        const res = await axios({
            method: "POST",
            url: `/api/users/bookmark/${postId}`,
            headers: {
                authorization: authToken, // passing token as an authorization header
            },
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
})

export const removeFromBookmarks = createAsyncThunk("posts/removeFromBookmarks", async ({ authToken, postId }) => {
    try {
        const res = await axios({
            method: "POST",
            url: `/api/users/remove-bookmark/${postId}`,
            headers: {
                authorization: authToken, // passing token as an authorization header
            },
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
})

export const getBookMarks = createAsyncThunk("posts/getBookMarks", async ({ authToken }) => {
    try {
        const res = await axios({
            method: "GET",
            url: `/api/users/bookmark`,
            headers: {
                authorization: authToken, // passing token as an authorization header
            },
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
})

const bookMarksSlice = createSlice({
    name: "bookMarks",
    initialState,
    reducers: {},
    extraReducers: {
        [getBookMarks.pending]:(state)=>{
            state.bookMarksLoading = false;
        },
        [addToBookmarks.pending]:(state)=>{
            state.bookMarksLoading = false;
        },
        [removeFromBookmarks.pending]:(state)=>{
            state.bookMarksLoading = false;
        },
        [getBookMarks.fulfilled]:(state, action)=>{
            state.bookMarks = action.payload.bookmarks;
            state.bookMarksLoading = true;
        },
        [addToBookmarks.fulfilled]:(state, action)=>{
            state.bookMarks = action.payload.bookmarks;
            state.bookMarksLoading = true;
        },
        [removeFromBookmarks.fulfilled]:(state, action)=>{
            state.bookMarks = action.payload.bookmarks;
            state.bookMarksLoading = true;
        },
    }
})

export default bookMarksSlice.reducer;