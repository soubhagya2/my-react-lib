import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from "../slicer/slice";

// Load saved state from localStorage
const preloadState = JSON.parse(localStorage.getItem("tasks")) || undefined;

export const store = configureStore({
  reducer: {
    task: todoSlicer,
  },
  //Load here
  preloadedState: preloadState,
});

//Save on change
store.subscribe(() =>
  localStorage.setItem("tasks", JSON.stringify(store.getState()))
 
);
