import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./Redux/store"
import {store,persistor} from '../src/Redux/store'
import { PersistGate } from "redux-persist/integration/react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <App />
    </PersistGate>/

    </Provider>

    </BrowserRouter>
  </React.StrictMode>
);
