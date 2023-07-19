import { USER_AUTHENTICATED, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_VERIFICATION_FAIL, USER_VERIFICATION_REQUEST, USER_VERIFICATION_SUCCESS } from "./userConstants";

const initialState = {
    user: {}
};


export const userRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };

        case USER_VERIFICATION_REQUEST:
            return { loading: true };
        case USER_VERIFICATION_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_VERIFICATION_FAIL:
            return { loading: false, error: action.payload };
        case USER_AUTHENTICATED:
            return {
                user: action.payload
            }
        default:
            return state;
    }
};