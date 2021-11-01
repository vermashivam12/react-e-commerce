import { combineReducers } from 'redux'
import productReducer from './products/product.reducer';

let rootReducer = combineReducers({
    productReducer,
});

export default rootReducer;