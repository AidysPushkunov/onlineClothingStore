import { Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import app from './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Registration from './Components/Ragistration/Ragistration'
import Authentication from './Components/Authentication/Authentication';
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import {useContext} from "react";
import Store from "./store/store";
import Products from "./Components/Products/Products";
import SingleProduct from './Components/SingleProduct/SingleProduct'

import { AuthContext } from './context/authContext.js';



// import Product from './Components/Product/Product';

// import Burger from './Components/Burger/Burger';

// const serverPath = 'http://localhost:3001';


function App(props) {
    const [burgerActive, setBurgerActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const { currentUser, logout } = useContext(AuthContext);

    let state = props.store.getState();

    const items = [
        {id: 1, value: "Главная", href:  "/"},
        {id: 2, value: "Товары", href: "/products"},
        {id: 3, value: "Корзина", href: "/basket"},
        {id: 4, value: "О нас", href: "/about"}

    ];

    const [products, setProducts] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/product/getproducts`);
                setProducts(res.data.values);
                return;
            } catch (err) {
                return err;
            }
        };
        fetchData().then(r => {return;});
    }, []);


    return (
    <>
        {/*<Burger active={menuActive} setActive={setMenuActive}/>*/}
        <Navigation active={menuActive} setActive={setMenuActive} burgerActive={burgerActive} setBurgerActive={setBurgerActive} currentUser={currentUser} logout={logout}/>
        <Menu active={menuActive} setActive={setMenuActive} items={items} burgerActive={burgerActive} setBurgerActive={setBurgerActive} logout={logout}/>
        {/*<BrowserRouter>*/}
            <Routes>
                <Route path='/' element={<Header products={products} />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/authentication' element={<Authentication />} />
                <Route path='/products' element={<Products products={products} />} />
                {/*<Route path='/products' element={<Product />} />*/}
                <Route path='/pagenotfound' element={<PageNotFound />} />
                <Route path='/single/:id' element={<SingleProduct products={products} />} />
            </Routes>
        {/*</BrowserRouter>*/}

    </>
  );
}

export default App;
