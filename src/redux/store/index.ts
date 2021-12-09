import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../slice/searchSlice';
import cartReducer from '../slice/cartSlice';
import bookListReducer from '../slice/bookListSlice';

const combinedReducer = combineReducers({
    searchState: searchReducer,
    cartState: cartReducer,
    bookListState: bookListReducer,
});

const rootReducer = (state: any, action: any) => {
    return combinedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {},
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
