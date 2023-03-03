import {productsReducer} from "./reducers/productsReducer";

// let productsData = [];
// let x = fetch("http://localhost:3001/getproducts")
//     .then((res) => {return res.json()})
//     .then((data) => {
//         console.log(data.values);
//     });


// console.log(pr)


const products = []



let store = {
    _state: {
        productsPage: {
            productsData: products,
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('Post changed')
    },
    // dispatch(action) {
    //     this._state.productsPage = productsReducer(this._state.productsPage, action)
    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


console.log(store._state.productsPage.productsData)


export default store;
window.store = store;

