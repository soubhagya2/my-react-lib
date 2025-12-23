import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import TodoApp from "./ReduxTodo.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </StrictMode>
);
