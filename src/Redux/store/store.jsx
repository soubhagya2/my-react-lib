import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from "../slice";

export const store = configureStore({
  reducer: {
    task: todoSlicer,
  },
});
