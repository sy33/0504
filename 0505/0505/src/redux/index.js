import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import userReducer from './userReducer'

function configureStore(){
    return createStore(userReducer, applyMiddleware(logger,thunk));
}

export {

    configureStore
}