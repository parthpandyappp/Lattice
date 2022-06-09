import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalVisible: false,
}

const modalSlice = createSlice({
    name: "modalForm",
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.modalVisible = !state.modalVisible
        }
    }
})

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;