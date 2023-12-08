import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Reducer.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider>
          <Notifications />
            <App />
          </MantineProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
