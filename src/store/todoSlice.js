import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  numbersOfTodo: 0,
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addNewTodo(state, action) {
      const newTodo = action.payload.todo;
      state.todoList.push(newTodo);
      state.numbersOfTodo = state.todoList.length;
    },

    removeTodo(state, action) {
      const restTodos = state.todoList.filter(
        (todo) => todo.key !== action.payload.todoKey
      );
      state.todoList = [];
      state.todoList.push(...restTodos);
      state.numbersOfTodo = state.numbersOfTodo - 1;
    },
  },
});

export const { addNewTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
