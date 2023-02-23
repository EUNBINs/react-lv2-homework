import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import todo from '../modules/todos';


// 1. createStore()
// 리덕스의 가장 핵심이 되는 스토어를 만드는 메소드이다
// 리덕스는 단일 스토어로 모든 상태 트리를 관리한다
// 리덕스를 사용할 시 creatorStore를 호출할 일은 한 번 이다

// 2. combineReducers()
// 리덕스는 action -> dispatch -> reducer 순으로 동작한다
// 이 때, 애플리케이션이 복잡해지면 reducer 부분을 여러 개로 나눠줘야 한다 
// combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만든다

// const rootReducer = combineReducers({
//   todo
// });
// const store = createStore(rootReducer);

// toolkit
const store = configureStore({
  reducer : {
    todo
  }
})

export default store;