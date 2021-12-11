import { createSlice } from '@reduxjs/toolkit';
import { store } from '../store';

const initialState = () => ({
    searchText: '',
});

export const searchSlice = createSlice({
    name: 'search',
    initialState: initialState(),
    reducers: {
        updateSearchText: (state, action) => {
            state.searchText = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateSearchText } = searchSlice.actions;

export default searchSlice.reducer;
