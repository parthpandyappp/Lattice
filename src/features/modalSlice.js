import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalVisible: false,
    modalChildren: null,
    postId: null,
    commentId: null,
}

const modalSlice = createSlice({
    name: "modalForm",
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state.modalVisible = !state.modalVisible
            state.modalChildren = action.payload.type;
            state.postId = action.payload.postId;
            state.commentId = action.payload?.commentId;
        }
    }
})

export const { toggleModal } = modalSlice.actions;
const modalFormReducer = modalSlice.reducer
export { modalFormReducer };