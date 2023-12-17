import { todosInitialData } from "@/data/todos";
import { Todo } from "@/features/todos/types/to-do";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodosState {
  todos: Todo[];
  selectedTodo: Todo | null;
  todoInfoDialogIsOpen: boolean;
  editTodoDialogIsOpen: boolean;
}

const initialState: TodosState = {
  todos: todosInitialData,
  selectedTodo: null,
  todoInfoDialogIsOpen: false,
  editTodoDialogIsOpen: false,
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
    toggleTodoStatus: (state, action: PayloadAction<{ id: Todo["id"] }>) => {
      const idx = state.todos.findIndex((t) => t.id === action.payload.id);
      state.todos[idx].checked = !state.todos[idx].checked;
    },
    selectTodo: (state, action: PayloadAction<Todo | null>) => {
      state.selectedTodo = action.payload;
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const idx = state.todos.findIndex((t) => t.id === action.payload.id);
      state.todos[idx] = action.payload;
    },
    toggleTodoInfoDialog: (state) => {
      state.todoInfoDialogIsOpen = !state.todoInfoDialogIsOpen;
    },
    toggleEditTodoDialog: (state) => {
      state.editTodoDialogIsOpen = !state.editTodoDialogIsOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createTodo,
  deleteTodo,
  toggleTodoInfoDialog,
  selectTodo,
  toggleTodoStatus,
  toggleEditTodoDialog,
  editTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
