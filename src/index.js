import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store/store";
import {Provider} from "react-redux";
// import {Provider} from "react-redux";
// import store from "../store/store";
// import Menu from "./Components/Menu/Menu";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} store={store}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
})

reportWebVitals();
