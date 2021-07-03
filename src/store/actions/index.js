import {INCREMENT, ADD_TODO, REMOVE_TODO, CHANGE_COMPLETED } from '@store/constants/actionTypes';

export const inc = () => {
   return {
      type: INCREMENT, 
      payload: 1
   };
}

export const addTodo = (title) => {
   const newTodo = {
      id: Date.now(), 
      title: title, 
      completed: false, 
   }
   return {
      type: ADD_TODO,
      payload: newTodo,
   }
}
export const removeTodo = (todo) => {
   return {
      type: REMOVE_TODO,
      payload: todo.id,
   }
}
export const changeCompleted = (todo) => {
   return {
      type: CHANGE_COMPLETED,
      payload: todo,

   }
}

