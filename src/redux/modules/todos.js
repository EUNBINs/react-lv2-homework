import { createSlice } from "@reduxjs/toolkit"


// action value
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const STATUS_TODO = 'STATUS_TODO'
const GET_TODO_ID = 'GET_TODO_ID'

// action Creator
// export const addTodo = (payload) => {

//   return {
//     type : ADD_TODO,
//     payload
//   }
// } 

// export const deleteTodo = (payload) => {

//   return {
//     type : DELETE_TODO,
//     payload
//   }
// }

// export const statusTodo = (payload) => {
//   console.log('status-payload', payload)
//   return {
//     type: STATUS_TODO,
//     payload
//   }
// }

// export const getTodoByID = (payload) => {
//   return {
//     type : GET_TODO_ID,
//     payload
//   }
// }

// 초기 상태값
const initialState = {
  todo : [
    {
      id: '0',
      title : '테스트',
      body: '난 해야할 게시물',
      isDone: false,
    },
    {
      id: '1',
      title : '테스트',
      body: '난 완료된 게시물',
      isDone: true,
    }
  ]
}

// reducer
// const todo = ( state = initialState, action ) => {
//   switch (action.type) {
//     case ADD_TODO :

//       return {
//         ...state,
//         todo: [ ...state.todo, action.payload ]
//       }
//     case DELETE_TODO :
//       return {
//         ...state,
//         todo: state.todo.filter((item) => item.id !== action.payload )
//       }
//     case STATUS_TODO :
//       //console.log('status', state)
//       return {
//         ...state,
//         todo : state.todo.map((item) => {
//           if(item.id === action.payload) {
//             //console.log(item.id, action.payload)
//             console.log(item)
//             return {
//               ...item,
//               isDone: !item.isDone
//             }
//           } else {
//             return item;
//           }
//         })
//       }
//     case GET_TODO_ID :
//       return {
//         ...state,
//         todo : state.todo.find((item) => {
//           return item.id === action.payload;
//         })
//       }
//     default :
//       return state;
//   }
// }

const todoSlice =createSlice({
  // 인자로 name, initialState, reducers
  name : 'todo',
  initialState,
  reducers : {
    addTodo : (state, action) => {
      state.todo.push(action.payload)
      // state.todo = [ ...state.todo, action.payload ]
    },
    deleteTodo : (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload )
    },
    statusTodo : (state, action) => {
      state.todo = state.todo.map((item) => {
        if(item.id === action.payload) {
          //console.log(item.id, action.payload)
          console.log(item)
          return {
            ...item,
            isDone: !item.isDone
          }
        } else {
          return item;
        }
      })
    },
    getTodoByID : (state, action) => {
      state.todo =state.todo.find((item) => {
        return item.id === action.payload;
      })
    }
  }
});

// export default todo;
export default todoSlice.reducer;

export const { addTodo, deleteTodo, statusTodo, getTodoByID } = todoSlice.actions