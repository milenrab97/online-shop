import { RECEIVE_PRODUCTS } from '../constants/products'

const initialState = {
    products: [],
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
            }
        default:
            return state
    }
}

export const productsSelector = state => state.products.products

export default productsReducer
