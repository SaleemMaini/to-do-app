import { todosInitialData } from "@/data/todos";
import { Todo } from "@/features/todos/types/to-do";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: todosInitialData,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<{ id: Todo["id"] }>) => {
      state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;