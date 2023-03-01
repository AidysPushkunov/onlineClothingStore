import {combineReducers, legacy_createStore as createStore} from "redux";

import {productsReducer} from "./reducers/productsReducer";

let reducers = combineReducers({
    productsReducer: productsReducer
});

let store = createStore(reducers);

export default store;