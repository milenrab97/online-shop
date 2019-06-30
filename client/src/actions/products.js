import { FETCH_PRODUCTS, RECEIVE_PRODUCTS } from '../constants/products'

export const fetchProductsAction = () => ({
    type: FETCH_PRODUCTS,
    payload: {},
})

export const receiveProductsAction = ({ products }) => ({
    type: RECEIVE_PRODUCTS,
    payload: { products },
})
