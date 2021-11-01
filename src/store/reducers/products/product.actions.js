import axios from 'axios';
import { FETCH_PRODUCTS } from './product.types';

export const fetchProducts = async () => {
    let products = await axios('https://fakestoreapi.com/products')
    return {
        type: FETCH_PRODUCTS,
        products: products.data,
    };
};