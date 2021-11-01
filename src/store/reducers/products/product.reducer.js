import { FETCH_PRODUCTS } from './product.types';

const initialState = {
    products: [],
    searchQuery: '',
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, ...action.payload };

        default: return state;
    }
};
export default reducer;