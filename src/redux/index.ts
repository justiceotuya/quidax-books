import { useSearchContext, useCartContext } from './slice/';
import { addItemToCart, toggleCartDisplay, dropItemFromCart, removeItemFromCart } from './slice/cartSlice';
import { updateSearchText } from './slice/searchSlice';
import {
    saveBookList,
    subtractQuantityFromBookItem,
    addQuantityToBookItem,
    getCurrentActiveBook,
} from './slice/bookListSlice';
import { store } from './store';

export {
    store,
    useSearchContext,
    useCartContext,
    addItemToCart,
    toggleCartDisplay,
    updateSearchText,
    dropItemFromCart,
    removeItemFromCart,
    saveBookList,
    subtractQuantityFromBookItem,
    addQuantityToBookItem,
    getCurrentActiveBook,
};
