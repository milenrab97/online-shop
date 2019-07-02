import { SET_CART } from '../constants/cart'

const initialState = {
    cart: [],
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                cart: action.payload.cart,
            }
        default:
            return state
    }
}

export const cartSelector = state => state.cart.cart

export default cartReducer
