import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: {},
    postsLoading: false,
    postLoading: false,
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {}
})

export default postsSlice.reducer;