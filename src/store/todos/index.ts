import { todosInitialData } from "@/data/todos";
import { Todo } from "@/features/todos/types/to-do";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodosState {
  todos: Todo[];
  selectedTodo: Todo | null;
  todoInfoDialogIsOpen: boolean;
}

const initialState: TodosState = {
  todos: todosInitialData,
  selectedTodo: null,
  todoInfoDialogIsOpen: false,
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
    selectTodo: (state, action: PayloadAction<Todo | null>) => {
      state.selectedTodo = action.payload;
    },
    toggleTodoInfoDialog: (state) => {
      state.todoInfoDialogIsOpen = !state.todoInfoDialogIsOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createTodo, deleteTodo, toggleTodoInfoDialog, selectTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
