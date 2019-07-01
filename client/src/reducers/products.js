import { RECEIVE_PRODUCTS, SET_PRODUCT_DETAILS } from '../constants/products'

const initialState = {
    products: [],
    product: {},
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
            }
        case SET_PRODUCT_DETAILS:
            return {
                ...state,
                product: action.payload.product,
            }
        default:
            return state
    }
}

export const productsSelector = state => state.products.products

export const productSelector = state => state.products.product

export default productsReducer
