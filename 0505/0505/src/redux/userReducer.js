import axios from 'axios';


const initialState = {
    user: {
        name: 'new name',
        age: 0,
        address: 'new address'
    },
    isLoading: false,
}

// const SAVE_USER = 'SAVE_USER'
// function saveUser(user){
//     return {
//         type:SAVE_USER,
//         user:user,
//     }
// }

const GET_USER_REQUEST = 'GET_USER_REQUEST'
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
const GET_USER_FAILED = 'GET_USER_FAILED'

function getUserRequest(){
    return {
        type:GET_USER_REQUEST,
        isLoading: true
    }
}

function getUserSuccess(user){
    return {
        type:GET_USER_SUCCESS,
        isLoading: false,
        user:user,
    }    
}

function getUserFailed(user){
    return {
        type:GET_USER_FAILED,
        isLoading: false,
    }    
}

function getUser(){
    return(dispatch)=>{
        dispatch(getUserRequest());
        axios.get("http://localhost:4000")
        .then((response)=>{
            dispatch(getUserRequest(response.data));
        })
        .catch((error)=>{
            dispatch(getUserFailed());
        })
        }
}


function userReducer(state = initialState, action) {

    switch (action.type) {
        case GET_USER_REQUEST:
        return Object.assign({}, state,{
            isLoading: action.isLoading
        })
        case GET_USER_SUCCESS:
        return Object.assign({}, state,{
            user: Object.assign({}, state.user, action.user),
            isLoading: action.isLoading
        })
        case GET_USER_FAILED:
        return Object.assign({}, state,{
            isLoading: action.isLoading
        })

        default:
            return state;
    }
}

export default userReducer;

export {
    getUser
}