import { configureStore } from "@reduxjs/toolkit";
import { authReducer, modalFormReducer, userProfileReducer, usersReducer, postsReducer, bookMarksReducer } from "../features"



const store = configureStore({
    reducer: {
        auth: authReducer,
        modal: modalFormReducer,
        userProfile: userProfileReducer,
        users: usersReducer,
        posts: postsReducer,
        bookmarks: bookMarksReducer
    }
})

export default store;