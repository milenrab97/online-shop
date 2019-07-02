import { ADD_TO_CART, FETCH_CART, SET_CART } from '../constants/cart'

export const addToCartAction = ({ productId }) => ({
    type: ADD_TO_CART,
    payload: { productId },
})

export const fetchCartAction = () => ({
    type: FETCH_CART,
    payload: {},
})

export const setCartAction = ({ cart }) => ({
    type: SET_CART,
    payload: { cart },
})
