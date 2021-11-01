import { combineReducers } from 'redux'
import productReducer from './products/product.reducer';

let rootReducer = combineReducers({
    products: productReducer,
});

export default rootReducer;