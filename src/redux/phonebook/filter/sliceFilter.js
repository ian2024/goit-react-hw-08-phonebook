import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilterAction: (state, action) => { state.filter = action.payload; },
    },
});

export const { changeFilterAction } = filterSlice.actions;

export const filterReduser = filterSlice.reducer;

