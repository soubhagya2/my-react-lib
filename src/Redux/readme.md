# Redux Store with LocalStorage Persistence

This store setup loads the saved Redux state from **localStorage** on app startup, so all localStorage logic is removed from `slice.jsx`, and automatically saves the updated state back to **localStorage** on every change.


This approach keeps **reducers pure** and handles persistence at the store level.

---

## `store.js`

```javascript
import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from "../slice";

// Load saved state from localStorage
const preloadState = JSON.parse(localStorage.getItem("tasks")) || undefined;

export const store = configureStore({
  reducer: {
    task: todoSlicer,
  },
  // Inject persisted state on startup
  preloadedState: preloadState,
});

// Save state to localStorage on every change
store.subscribe(() =>
  localStorage.setItem("tasks", JSON.stringify(store.getState()))
);
