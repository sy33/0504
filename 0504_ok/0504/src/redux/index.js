import {createStore,combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {dataReducer} from './dataReducer';

// state.user.name
// state.date.todos

function configureStore(){
    return createStore(combineReducers({
        user:userReducer, // statement.user.name 이렇게 가지고옴
        data:dataReducer,
    }));

}

export {
    configureStore
}