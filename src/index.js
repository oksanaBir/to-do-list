import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import app from "./store/reducers";

const store = createStore(app);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);