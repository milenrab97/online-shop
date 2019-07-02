import { SET_TOKEN, RESET_STORE, LOGOUT, SET_USER_ROLE } from '../constants/auth'

const initialState = {
    token: '',
    userRole: '',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token,
            }
        case SET_USER_ROLE:
            return {
                ...state,
                userRole: action.payload.userRole,
            }
        case LOGOUT:
            return { ...state, token: '', userRole: '' }
        case RESET_STORE:
            return { ...initialState }
        default:
            return state
    }
}

export const tokenSelector = state => state.auth.token

export const userRoleSelector = state => state.auth.userRole

export default authReducer
