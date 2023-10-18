import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./toDo";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
