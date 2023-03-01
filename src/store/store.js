import {productsReducer} from "./reducers/productsReducer";
import axios from "axios";
import {useEffect} from "react";


// let productsData = [];
// let x = fetch("http://localhost:3001/getproducts")
//     .then((res) => {return res.json()})
//     .then((data) => {
//         console.log(data.values);
//     });


// console.log(pr)



let store = {
    _state: {
        productsPage: {
            productsData: [
                {
                    id: 1,
                    img: 'https://www.charuel.ru/upload/resize_cache/iblock/73f/445_445_1/%D0%92%D0%AB%D0%9F%D0%90%D0%94%D0%90%D0%A8%D0%9A%D0%90.jpg',
                    title: 'КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ',
                    description: 'Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян'
                },
                {
                    id: 2,
                    img: 'https://www.charuel.ru/upload/resize_cache/iblock/73f/445_445_1/%D0%92%D0%AB%D0%9F%D0%90%D0%94%D0%90%D0%A8%D0%9A%D0%90.jpg',
                    title: 'КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ',
                    description: 'Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян',
                    price: "7040"
                },


            ]
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

export default store;
window.store = store;

