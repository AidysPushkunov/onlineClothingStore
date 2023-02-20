import { Routes, Route } from 'react-router-dom';
import News from './Components/News/News';
import React, {useState} from 'react';
// import app from './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Registration from './Components/Ragistration/Ragistration'
import Authentication from './Components/Authentication/Authentication';
import PageNotFound from "./Components/PageNotFound/PageNotFound";


// import Product from './Components/Product/Product';

// import Burger from './Components/Burger/Burger';

// const serverPath = 'http://localhost:3001';


function App() {
    const [burgerActive, setBurgerActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);


    const items = [
        {id: 1, value: "Главная", href:  "/"},
        {id: 2, value: "Товары", href: "/products"},
        {id: 3, value: "Новости", href: "/news"},
        {id: 4, value: "О нас", href: "/about"},
        {id: 5, value: "Войти", href: "/authentication"},
        {id: 6, value: "Регистрация", href: "/registration"}
    ];

    return (
    <div>
        {/*<Burger active={menuActive} setActive={setMenuActive}/>*/}
        <Navigation active={menuActive} setActive={setMenuActive} burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
        <Menu active={menuActive} setActive={setMenuActive} items={items} burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
        <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/news' element={<News />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/authentication' element={<Authentication />} />
            {/*<Route path='/products' element={<Product />} />*/}
            <Route path='/pagenotfound' element={<PageNotFound />} />


        </Routes>
    </div>
  );
}

export default App;
