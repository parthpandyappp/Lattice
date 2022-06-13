import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalVisible: false,
    modalChildren: null,
    postId: null,
}

const modalSlice = createSlice({
    name: "modalForm",
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state.modalVisible = !state.modalVisible
            state.modalChildren = action.payload.type
            state.postId = action.payload.postId
        }
    }
})

export const { toggleModal } = modalSlice.actions;
const modalFormReducer = modalSlice.reducer
export { modalFormReducer };