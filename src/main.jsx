import { createRoot } from "react-dom/client";
import "./"
import { StrictMode } from "react";
import TodoApp from "./Redux/ReduxTodo.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </StrictMode>
);
