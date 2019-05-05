

const initialState = {
    todos: ["놀기", "자기"]
}

function dataReducer(state = initialState, action){
    switch (action.type){

        default:
            return state;
    }
}

export {
    dataReducer
}