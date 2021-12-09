import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { IStudyRequestProps } from '../types';

export interface ICartProps {
    id: string;
    title: string;

    image_url: string;
    price: number;
    currency: string;
    authors: {
        name: string;
        id: string;
    }[];
    quantity: number;
    totalPrice: number;
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as ICartProps[],
        isCartOpen: false,
    },
    reducers: {
        addItemToCart: (state, action) => {
            const { id, price, available_copies } = action.payload;
            const itemInCart = state.cart.find((item) => item.id === id);
            if (!itemInCart) {
                state.cart.push({ ...action.payload, quantity: 1, totalPrice: price });
            } else {
                if (itemInCart?.quantity >= available_copies) {
                    return;
                } else {
                    itemInCart.quantity += 1;
                    itemInCart.totalPrice += price;
                }
            }
        },

        dropItemFromCart: (state, action) => {
            const { id, price, available_copies } = action.payload;
            const itemInCart = state.cart.find((item) => item.id === id);
            if (!itemInCart) {
                return;
            }
            if (itemInCart.quantity == 1) {
                state.cart = state.cart.filter((item) => item.id !== id);
            } else {
                itemInCart.quantity -= 1;
                itemInCart.totalPrice -= price;
            }
        },

        removeItemFromCart: (state, action) => {
            const { id, price, available_copies } = action.payload;
            const itemInCart = state.cart.find((item) => item.id === id);
            if (!itemInCart) {
                return;
            }
            state.cart = state.cart.filter((item) => item.id !== id);
        },

        toggleCartDisplay: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, toggleCartDisplay, dropItemFromCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
