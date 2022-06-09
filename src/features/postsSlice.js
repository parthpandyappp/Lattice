import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: {},
    postsLoading: false,
    postLoading: false,
}

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    try {
        const res = await axios({
            method: "GET",
            url: "/api/posts",
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
})

export const createPost = createAsyncThunk("posts/createPost", async ({ authToken, post }) => {
    try {
        const res = await axios({
            method: "POST",
            url: "/api/posts",
            headers: {
                authorization: authToken, // passing token as an authorization header
            },
            data: JSON.stringify({
                postData: post,
            })
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
})

export const editPost = createAsyncThunk("posts/editPost", async ({ authToken, postId, post }) => {
    try {
        const res = await axios({
            method: "POST",
            url: `/api/posts/edit/${postId}`,
            headers: {
                authorization: authToken, // passing token as an authorization header
            },
            data: {
                postData: post,
            }
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
})

export const deletePost = createAsyncThunk("posts/editPost", async ({ authToken, postId, post }) => {
    try {
        const res = await axios({
            method: "DELETE",
            url: `/api/posts/${postId}`,
            headers: {
                authorization: authToken, // passing token as an authorization header
            },
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
})


const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.postsLoading = false;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload.posts;
            state.postsLoading = true;
        },
        [createPost.fulfilled]: (state, action) => {
            state.posts = action.payload.posts;
            state.postsLoading = true;
        },
        [editPost.pending]: (state) => {
            state.postsLoading = false;
        },
        [editPost.fulfilled]: (state, action) => {
            state.posts = action.payload.posts;
            state.postsLoading = true;
        },
        [deletePost.pending]: (state) => {
            state.postsLoading = false;
        },
        [deletePost.fulfilled]: (state, action) => {
            state.posts = action.payload.posts;
            state.postsLoading = true;
        },

    }
})

export default postsSlice.reducer;