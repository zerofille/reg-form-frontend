import ACTION_TYPES from "./actionTypes"

export const createUserRequest = (values) =>{
    return {
        type:ACTION_TYPES.CREATE_USER_REQUEST,
        payload:values
    }
},
export const createUserSuccess = (values) =>{
    return {
        type:ACTION_TYPES.CREATE_USER_SUCCESS,
        payload:values
    }
},
export const createUserError = (error) =>{
    return {
        type:ACTION_TYPES.CREATE_USER_ERROR,
        payload:error
    }
}