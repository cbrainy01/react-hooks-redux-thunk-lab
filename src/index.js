import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./state/store"

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
