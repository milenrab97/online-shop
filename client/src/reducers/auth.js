import { SET_TOKEN, RESET_STORE, LOGOUT } from '../constants/auth'

const initialState = {
    token: '',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token,
            }
        case LOGOUT:
            return { ...state, token: '' }
        case RESET_STORE:
            return { ...initialState }
        default:
            return state
    }
}

export const tokenSelector = state => state.auth.token

export default authReducer
