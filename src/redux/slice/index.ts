import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCartContext = () => {
    const state = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    return { state: state.cartState, dispatch };
};
export const useSearchContext = () => {
    const state = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    return { state: state.searchState, dispatch };
};
export const useBookListContext = () => {
    const state = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    return { state: state.bookListState, dispatch };
};
