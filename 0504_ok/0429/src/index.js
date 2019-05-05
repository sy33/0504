import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';

const initialState = {
    todos:["씻기"]
}

const ADD_TODO = 'ADD TODO';

function todos(state = initialState, action){
    // console.log(state,action)
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({},state,{
                todos: [ ...state.todos,action.content]  // 복사해서 사용? 
            });
        default:
            return state;    
    }
}

const store = createStore(todos);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({
    type:ADD_TODO,
    content:"abc"
})
/**
 * {
 *      type: ADD_TODO
 *      content:""
 * }
 */

// function counter(state = 0, action) {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
//   }

// const store = createStore(counter);

// store.subscribe(() => console.log(store.getState())) // state 변경 될때마다 바뀜 (함수호출)

// store.dispatch({ type: 'INCREMENT' }) // 리듀서 들어가서 -> 액션(INCREMENT) 찾아 실행

// store.dispatch({ type: 'INCREMENT' })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
