import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  todo: string;
}

export const todoSlice = createSlice({
  name: "todo",
  initialState: [] as Todo[],
  reducers: {
    add: (state, action) => {
      state.push({ id: Math.random().toString(), todo: action.payload });
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const { add, remove } = todoSlice.actions;
