import authReducer from "../features/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import modalFormReducer from "../features/modalSlice";
import userProfileReducer from "../features/userProfileSlice";
import usersReducer from "../features/usersSlice";
import postsReducer from "../features/postsSlice";



const store = configureStore({
    reducer: {
        auth: authReducer,
        modal: modalFormReducer,
        userProfile: userProfileReducer,
        users: usersReducer,
        posts: postsReducer,
    }
})

export default store;