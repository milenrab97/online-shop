import { RECEIVE_PRODUCTS, SET_PRODUCT_DETAILS, SET_COMMENTS, RESET_CURRENT_PRODUCT } from '../constants/products'

const initialState = {
    products: [],
    product: {},
    comments: [],
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
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.payload.comments,
            }
        case RESET_CURRENT_PRODUCT:
            return {
                ...state,
                product: [],
            }
        default:
            return state
    }
}

export const productsSelector = state => state.products.products

export const productSelector = state => state.products.product

export const commentsSelector = state => state.products.comments

export default productsReducer
