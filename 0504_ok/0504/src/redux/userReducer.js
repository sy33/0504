

const initialState = {
    name:'Jack',
    age: 20,
    address: 'secret',
}


function changeAddress(newAddress){
    return {
        type:'CHANGE_ADDRESS',
        address:newAddress,
    }
}

function userReducer(state = initialState, action){
    switch (action.type){
        case "CHANGE_ADDRESS":
            return Object.assign({}, state, {
                address:action.address
        })
        default:
            return state;
    }
}

export {
    userReducer,
    changeAddress
}