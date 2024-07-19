
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, storeTodo } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export const rootModal = document.querySelector("#modal");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter basename="/todo-list-react/">
      <Provider store={storeTodo}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </>
);
