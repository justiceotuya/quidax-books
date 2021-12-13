import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../types';
// import { IStudyRequestProps } from '../types';
export interface IModifiedBook extends Book {
    availableStoreBooks: number;
}

export const bookListSlice = createSlice({
    name: 'bookList',
    initialState: {
        bookList: [] as IModifiedBook[],
        currentBook: {} as IModifiedBook,
    },
    reducers: {
        saveBookList: (state, action) => {
            //add a reference to the quantities of the individual book items.
            //this will serve as a guide for the actual amount of books
            //available so that when we start adding and subtracting there is a
            //refrence of the actual amount of books in the store
            state.bookList = [...action.payload].map((item: IModifiedBook) => {
                return { ...item, availableStoreBooks: item.available_copies };
            });
        },

        getCurrentActiveBook: (state, action) => {
            state.currentBook = state.bookList.find((item) => item.id === action.payload.id) || ({} as IModifiedBook);
        },

        subtractQuantityFromBookItem: (state, action) => {
            state.bookList = state.bookList.map((item) => {
                if (item.id === action.payload.id && item.available_copies > 0) {
                    item.available_copies -= 1;
                    return item;
                } else {
                    return item;
                }
            });
        },

        addQuantityToBookItem: (state, action) => {
            state.bookList = state.bookList.map((item) => {
                if (item.id === action.payload.id && item.available_copies < item.availableStoreBooks) {
                    item.available_copies += 1;
                    return item;
                } else {
                    return item;
                }
            });
        },

        restockCartItem: (state, action) => {
            state.bookList = state.bookList.map((item) => {
                if (item.id === action.payload.id) {
                    item.available_copies = item.availableStoreBooks;
                    return item;
                } else {
                    return item;
                }
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    saveBookList,
    subtractQuantityFromBookItem,
    addQuantityToBookItem,
    getCurrentActiveBook,
    restockCartItem,
} = bookListSlice.actions;

export default bookListSlice.reducer;
